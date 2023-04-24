import React from 'react';
import { useState, useEffect } from "react";
import './style.css';
import { CardLanc } from '../../components/CardLanc';

function Index() {

  const [modoPag, setModoPag] = useState();
  const [val, setVal] = useState();
  const [dataD, setdataD] = useState();
  const [classe, setClasse] = useState();

  const [cards, setCards] = useState([]);

  function handleCreateCard(){

    let time = new Date();
    let formattedTime = time.getFullYear()+'-0'+(time.getMonth()+1)+'-'+time.getDate();
    const newCard = {
      k: time.toLocaleTimeString("pt-br")+time.getMilliseconds(),
      mP: modoPag,
      v: val,
      dD: dataD,
      c: classe,
      dC: formattedTime
    };
    setCards(prevState => [...prevState, newCard]);

    //(classe=='Despesas') ? '/despesas/1' : '/recebiveis/1'
    fetch('/despesas/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newCard})
    })
    .then(response => {
      // handle response
    })
    .catch(error => {
    });
  }


  useEffect(() => {
    fetch('/despesas')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the data
    })
    .catch(error => console.error(error));
  },[])

  return (
    <>
      <main>
        <div className ="left"></div>

        <div className ="right">

          <div className ="top">
            <h1>Recebíveis e despesas</h1>
          </div>

          <div className ="botton">
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

          <div className ="lower">
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