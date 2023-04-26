import "./styles.css";
import { FaArrowLeft } from 'react-icons/fa';


export function Menu() {
  return (
    
    <div className="menu">
      <FaArrowLeft />
      <h2>EMPRÉSTIMO</h2>
      
      <h3>
        
          <p className='justa'>Justa</p>
          <p className='traço'></p>
          <p className='bloco1'></p>
          <p className='bloco2'></p>
          <p className='bloco3'></p>
          <p className='bloco4'></p>
          <p className='bloco5'></p>
          <p className='bloco6'></p>
          <p className='telainicial'>Tela Inicial</p>
          <p className='saldodevendas'>Saldo de Vendas</p>
          <p className='lançamentos'>Lançamentos</p>
          <p className='simulaçoes'>Simulações</p>
          <p className='boleto'>Gerar Boleto</p>
          <p className='emprestimo'>Empréstimo</p>
          
      </h3>


    </div>
  );
}