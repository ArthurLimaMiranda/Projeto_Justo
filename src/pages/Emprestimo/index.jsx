import React, {useState, useEffect} from "react";
import emprestimoStyle from "./styles.module.css"
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'
import {Card} from '../../components/Card';

function Emprestimo() {
  const [emprestimoValor, setEmprestimoValor] = useState("");
  const [emprestimoParcelas, setEmprestimoParcelas] = useState("");
  const [emprestimo, setEmprestimo]= useState([]);
  let Id=1;

  function handleAddEmprestimo(){
     const newEmprestimo = {
      valor: emprestimoValor,
      parcelas: emprestimoParcelas
     };
  
  setEmprestimo((prevState)=> [...prevState, newEmprestimo]);
    }
    
    useEffect(() => {
 
    }, [emprestimo]);
    
    useEffect(() => {
      // código para gerar as parcelas e fazer as chamadas fetch
      let time = new Date();
      let formattedTime = time.getFullYear() + '-0' + (time.getMonth() + 1) + '-' + time.getDate();
  
      for (let i = 0; i < emprestimo[emprestimo.length - 1]?.parcelas || 0; i++) {
        let contador = i + 1;
        let dataDeDebito = time.getFullYear() + (contador < 10 ? '-0' : '-') + (time.getMonth() + 1 + contador) + '-' + time.getDate();
        
        fetch('http://localhost:3001/' + Id, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: Id,
            code: time.toLocaleTimeString("pt-br") + time.getMilliseconds(),
            modoDePagamento: "empréstimo",
            valor: emprestimo[emprestimo.length - 1]?.valor / emprestimo[emprestimo.length - 1]?.parcelas,
            dataDeDebito: dataDeDebito,
            classe: Emprestimo,
            dataDeCriacao: formattedTime
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }
    }, [emprestimo]);
    
  return (
    
    <div className={emprestimoStyle.container}>

      <div className={emprestimoStyle.Menu}>
        <Sidebar />
      </div>

      <div className={emprestimoStyle.Conteudo}>

        <div className={emprestimoStyle.Topo}>

          <div className={emprestimoStyle.tit}>
            <button type="button" className={emprestimoStyle.retorno}> <h2>{'<'}</h2> </button>
            <h2>EMPRÉSTIMO</h2>
          </div>
          

          <div className={emprestimoStyle.empr}>
            <h3 className={emprestimoStyle.txt}>Valor do empréstimo </h3>
            <input type="text" placeholder="R$ 500 - R$ 10.000"  className={emprestimoStyle.inp} onChange={(e) => setEmprestimoValor(e.target.value)}  />
            <h3 className={emprestimoStyle.txt}>Quantidade de parcelas </h3>
            <input type="text" placeholder="Ex: 10 parcelas "  className={emprestimoStyle.inp} onChange={(e) => setEmprestimoParcelas(e.target.value)} /> 
          </div>

        </div>

        <div className={emprestimoStyle.Baixo}>
          <button type="button" className={emprestimoStyle.but} onClick={handleAddEmprestimo}>Confirmar</button>
          {emprestimo.map((emprestimo) => <Card valor= {emprestimo.valor} parcelas= {emprestimo.parcelas}/>  )}
        </div>
      </div>        
    </div>
  )
}

export default Emprestimo

