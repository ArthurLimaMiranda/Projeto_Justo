import { useState } from 'react'
import Header from '../../components/Extrato/Header'
import Card from '../../components/Extrato/Card/index.jsx'
import './styles.css'
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'

function Extrato() {
  const [description, setDescription] = useState();
  const [number, setNumber] = useState();
  const [content, setContent] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleAddCard(){
    const newCard = {
      name: description,
      amount: number, 
    };

    setContent(prevState => [...prevState, newCard]);
    setSaldo((num) => num += parseInt(number));
  }
  
  return (
    <>
      <Sidebar 
        show={(isOpen) ? "sidebar" : "noSidebar"}
      />
      <div className="container">
        <Header 
          balance={saldo}
          toggle={() => setIsOpen(!isOpen)}
        />
        <div className='form'>
          <div className='info'>
            <label htmlFor='1'>Descrição:</label>
            <input
              id='1' 
              type="text" 
              placeholder="Digite o nome"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <br></br>
          <div className='info'>
            <label>Entrada/saída:</label>
            <input
              type='number'
              placeholder='(Saída: valor negativo)'
              onChange={e => setNumber(e.target.value)}
            />
          </div>
          <br></br>
          <button type="button" onClick={handleAddCard}>Adicionar</button>
        </div>
        {
          content.map(i => 
            <Card 
              key={i.name}
              name={i.name} 
              amount={i.amount}
            />
          )
        }
      </div>
    </>
  )
}

export default Extrato