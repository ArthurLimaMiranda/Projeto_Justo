
import React, {useState, useEffect} from "react";
import './styles.css';

import {Card} from '../components/Card';
import {Menu} from '../components/Menu';



function Home() {
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
        
        fetch('http://localhost:5174/' + Id, {
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
    
    <div className="container">

<Menu />
  
    <h3>Valor do empréstimo </h3>
    <input type="text" placeholder="R$ 500 - R$ 10.000"   onChange={(e) => setEmprestimoValor(e.target.value)}  />
      <p></p>
    <h3>Quantidade de parcelas </h3>
    <input type="text" placeholder="Ex: 10 parcelas "   onChange={(e) => setEmprestimoParcelas(e.target.value)} />
 
    <p></p>
      <button type="button" onClick={handleAddEmprestimo}>Confirmar</button>
      
      { emprestimo.map((emprestimo) => <Card valor= {emprestimo.valor} parcelas= {emprestimo.parcelas}/>  )}
      
      
      
      </div>
    
  )
}

export default Home

