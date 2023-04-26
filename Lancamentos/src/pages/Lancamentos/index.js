import React from 'react';
import { useState, useEffect, useRef } from "react";
import './style.css';
import { CardLanc } from '../../components/CardLanc';

function Index() {

    const [modoPag, setModoPag] = useState();
    const [val, setVal] = useState();
    const [dataD, setdataD] = useState();
    const [classe, setClasse] = useState();
    const [titulo, setTitulo] = useState();
    const [mode, setMode] = useState();
    const [cards, setCards] = useState([]);
    const [newLancamentos, setnewLancamentos] = useState([]);
    const hasRunRef = useRef(false);

    //Change Later
    let Id = 1;
    function handleCreateCard() {
        console.log(classe);
        let time = new Date();
        let formattedTime = time.getFullYear() + '-0' + (time.getMonth() + 1) + '-' + time.getDate();
        const newCard = {
            k: time.toLocaleTimeString("pt-br") + time.getMilliseconds(),
            mP: modoPag,
            v: val,
            dD: dataD,
            c: classe,
            dC: formattedTime
        };
        setCards(prevState => [...prevState, newCard]);


        fetch('http://localhost:3001/' + ((classe === 'Despesas') ? 'despesas/'+{Id} : 'recebiveis/'+{Id}), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Id,
                code: time.toLocaleTimeString("pt-br") + time.getMilliseconds(),
                modoDePagamento: modoPag,
                valor: val,
                dataDeDebito: dataD,
                classe: classe,
                dataDeCriacao: formattedTime
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    function handleFilter() {    
        if (mode === 0) {
          setTitulo('Recebíveis e despesas'); 
          setMode(1);
        } 
        else if (mode === 1) {
          setTitulo('Recebíveis');
          setMode(2);
        } 
        else {
          setTitulo('Despesas');
          setMode(0);
        }
      }

    useEffect(() => {
        if (!hasRunRef.current) {
            setTitulo('Recebíveis e despesas');
            setMode(1);
            let lancamentos = [];
            let cont = 0;
            fetch('http://localhost:3001/despesas')
                .then(response => response.json())
                .then(data => {
                    const record = data.records.find((item) => item.id === Id);
                    for (let despesa in record.despesas) {
                        lancamentos[cont] = record.despesas[despesa];
                        cont++;
                    }

                })
                .catch(error => console.error(error));

            fetch('http://localhost:3001/recebiveis')
                .then(response => response.json())
                .then(data => {
                    const record = data.records.find((item) => item.id === Id);
                    for (let recebivel in record.recebiveis) {
                        lancamentos[cont] = record.recebiveis[recebivel];
                        cont++;
                    }

                    lancamentos.sort((a, b) => {
                        const dateA = new Date(a.dataDeDebito);
                        const dateB = new Date(b.dataDeDebito);
                        return dateA - dateB;
                    });

                    setnewLancamentos(lancamentos);

                    for (let lancamento in lancamentos) {
                        let dia = new Date();
                        let formattedDia = dia.getFullYear() + '-0' + (dia.getMonth() + 1) + '-' + dia.getDate();
                        if (lancamentos[lancamento].dataDeDebito === formattedDia) {
                            fetch('http://localhost:3001/extrato/'+{Id}, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    id: Id,
                                    code: lancamentos[lancamento].code,
                                    modoDePagamento: lancamentos[lancamento].modoDePagamento,
                                    valor: lancamentos[lancamento].valor,
                                    dataDeDebito: lancamentos[lancamento].dataDeDebito,
                                    classe: lancamentos[lancamento].classe,
                                    dataDeCriacao: lancamentos[lancamento].dataDeCriacao
                                })
                            })
                                .then(response => response.json())
                                .then(data => console.log(data))
                                .catch(error => console.error(error));
                            
                            

                                fetch('http://localhost:3001/'+lancamentos[lancamento].classe.toLowerCase()+'/:'+Id+'/:'+lancamentos[lancamento].code, 
                                { method: 'DELETE' })
                                .then(response => response.json())
                                .then(data => console.log(data))
                                .catch(error => console.error(error));

                                  
                        }

                        else {
                            const newCard = {
                                k: lancamentos[lancamento].code,
                                mP: lancamentos[lancamento].modoDePagamento,
                                v: lancamentos[lancamento].valor,
                                dD: lancamentos[lancamento].dataDeDebito,
                                c: lancamentos[lancamento].classe,
                                dC: lancamentos[lancamento].dataDeCriacao
                            };
                            setCards(prevState => [...prevState, newCard]);
                        }
                    }
                })
                .catch(error => console.error(error));

            hasRunRef.current = true;
        }
    }, []);

    useEffect(() => {
        setCards([]);
        for (let lancamento in newLancamentos) {
            if(mode==2){
                if (newLancamentos[lancamento].classe === 'Recebiveis'){
                    const newCard = {
                        k: newLancamentos[lancamento].code,
                        mP: newLancamentos[lancamento].modoDePagamento,
                        v: newLancamentos[lancamento].valor,
                        dD: newLancamentos[lancamento].dataDeDebito,
                        c: newLancamentos[lancamento].classe,
                        dC: newLancamentos[lancamento].dataDeCriacao
                    };
                    setCards(prevState => [...prevState, newCard]);
                }

            }
            else if(mode==0){
                if (newLancamentos[lancamento].classe === 'Despesas'){
                    const newCard = {
                        k: newLancamentos[lancamento].code,
                        mP: newLancamentos[lancamento].modoDePagamento,
                        v: newLancamentos[lancamento].valor,
                        dD: newLancamentos[lancamento].dataDeDebito,
                        c: newLancamentos[lancamento].classe,
                        dC: newLancamentos[lancamento].dataDeCriacao
                    };
                    setCards(prevState => [...prevState, newCard]);                   
                }
            }

            else{
                const newCard = {
                    k: newLancamentos[lancamento].code,
                    mP: newLancamentos[lancamento].modoDePagamento,
                    v: newLancamentos[lancamento].valor,
                    dD: newLancamentos[lancamento].dataDeDebito,
                    c: newLancamentos[lancamento].classe,
                    dC: newLancamentos[lancamento].dataDeCriacao
                };
                setCards(prevState => [...prevState, newCard]);                   
            }
    
            }


      }, [mode]);

    return (
        <>
            <main>
                <div className="left"></div>

                <div className="right">

                    <div className="top">
                        <button type="button" className="retorno"> <h2>{'<'}</h2> </button>
                        <button type="button" className="filtro" onClick={handleFilter}>
                        <h1>{titulo}</h1>
                            
                            
                        </button>
                    </div>

                    <div className="botton">
                        {
                            cards.map(card => (
                                <CardLanc
                                    key={card.k}
                                    modoPagamento={card.mP}
                                    valor={card.v}
                                    dataDebito={card.dD}
                                    dataCriado={card.dC}
                                    lancamaneto={card.c}
                                />
                            ))
                        }
                    </div>

                    <div className="lower">
                        <button type="button" onClick={handleCreateCard}>Clique Aqui</button>
                        <input
                            type='text'
                            onChange={e => setModoPag(e.target.value)}
                        />
                        <input
                            type='text'
                            onChange={f => setVal(f.target.value)}
                        />
                        <input
                            type='text'
                            onChange={g => setClasse(g.target.value)}
                        />
                        <input
                            type='date'
                            onChange={h => setdataD(h.target.value)}
                        />
                    </div>

                </div>
            </main>
        </>
    )
}

export default Index;