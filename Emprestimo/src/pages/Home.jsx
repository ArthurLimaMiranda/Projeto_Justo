
import React, {useState} from "react";
import './styles.css';

import {Card} from '../components/Card';
import {Menu} from '../components/Menu';


function Home() {
  const [emprestimoValor, setEmprestimoValor] = useState("");
  const [emprestimoParcelas, setEmprestimoParcelas] = useState("");
  const [emprestimo, setEmprestimo]= useState([]);

  function handleAddEmprestimo(){
     const newEmprestimo = {
      valor: emprestimoValor,
      parcelas: emprestimoParcelas
     };
  
  setEmprestimo((prevState)=> [...prevState, newEmprestimo]);
    }
  return (
    
    <div className="container">

<Menu />
  
    <h3>Valor do empréstimo </h3>
    <input type="number" placeholder="R$ 500 - R$ 10.000"   onChange={(e) => setEmprestimoValor(e.target.value)}  />
      <p></p>
    <h3>Quantidade de parcelas </h3>
    <input type="number" placeholder="X "   onChange={(e) => setEmprestimoParcelas(e.target.value)} />
 
    <p></p>
      <button type="button" onClick={handleAddEmprestimo}>Confirmar</button>
      
      { emprestimo.map((emprestimo) => <Card valor= {emprestimo.valor} parcelas= {emprestimo.parcelas}/>  )}

      
      </div>
    
  )
}

export default Home