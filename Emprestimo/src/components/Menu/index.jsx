import "./styles.css";

export function Menu() {
  return (
    <div className="menu">
      <h3>EMPRÉSTIMO</h3>
      <h3>{/*Guia de Navegação*/}
          <p className='justa'>Justa</p>
          <p className='traço'>{/*traço*/}</p>
          <p className='bloco1'>{/*bloco1*/}</p>
          <p className='bloco2'>{/*bloco2*/}</p>
          <p className='bloco3'>{/*bloco3*/}</p>
          <p className='bloco4'>{/*bloco4*/}</p>
          <p className='bloco5'>{/*bloco5*/}</p>
          <p className='bloco6'>{/*bloco6*/}</p>
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