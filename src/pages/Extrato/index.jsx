import { useState, useEffect, useRef } from 'react'
import Header from '../../components/Extrato/Header'
import Card from '../../components/Extrato/Card/index.jsx'
import extratoStyle from "./styles.module.css"
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'

function Extrato() {
  const [description, setDescription] = useState();
  const [number, setNumber] = useState();
  const [content, setContent] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const hasRunRef = useRef(false);

  let Id = 1;

  function handleAddCard(){
    const newCard = {
      name: description,
      amount: number, 
    };

    setContent(prevState => [...prevState, newCard]);
    setSaldo((num) => num += parseInt(number));
  }

  useEffect(() => {
    if (!hasRunRef.current) {
      let lancamentos = [];
      let cont = 0;
      fetch('http://localhost:3001/extrato/')
        .then(response => response.json())
        .then(data => {
          const record = data.records.find((item) => item.id === Id);
          for (let dado in record.extrato) {
            lancamentos[cont] = record.extrato[dado];
            cont++
          }
          for (let lancamento in lancamentos) {
            const newCard = {
              name: lancamentos[lancamento].modoDePagamento,
              amount: (lancamentos[lancamento].classe == "Despesas") ? -lancamentos[lancamento].valor : lancamentos[lancamento].valor,
              date: lancamentos[lancamento].dataDeDebito
            };
            setContent(prevState => [...prevState, newCard]);
            setSaldo((num) => num += (lancamentos[lancamento].classe == "Despesas") ? -parseFloat(lancamentos[lancamento].valor) : parseFloat(lancamentos[lancamento].valor));
          }
        })
        .catch(error => console.error(error));
      hasRunRef.current = true;
    }
  }, []);
  
  return (
    <>
    <div className={extratoStyle.Extrato}>
      <div className={extratoStyle.Side}>
        <Sidebar 
            show={"sidebar"}
          />
      </div>      
        <div className={extratoStyle.container}>
          <Header 
            balance={saldo}
            toggle={() => setIsOpen(!isOpen)}
          />
          <div className={extratoStyle.cards}>
            <h2>Últimas movimentações:</h2>
            {
              content.map(i => (
                <Card 
                  key={i.name}
                  name={i.name} 
                  amount={i.amount}
                  date={i.date}
                />
              ))
            }
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Extrato