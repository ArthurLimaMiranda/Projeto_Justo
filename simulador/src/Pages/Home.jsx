import { useState } from 'react'
import "./simuladorpage.css"
import "./guiadenavegacao.css"


export function Home() {


  return (
    <div className='Desktop'>
      <h1>
        <p className="simuladordevendas">Simulador de Vendas</p>
      </h1>
      <h2>{/*Background 2*/}
          <p className='valordoproduto'>Valor do Produto</p>
          <p className='bandeiradocartao'>Bandeira do Cartão</p>
          <p className='taxadamaquininha'>Taxa da Maquininha</p>
          <p className='tabela'>{/*Tabela*/}</p>
          <p className='linha1'>{/*linha1*/}</p>
          <p className='linha2'>{/*linha2*/}</p>
          <p className='linha3'>{/*linha3*/}</p>
          <p className='coluna1'>{/*coluna1*/}</p>
          <p className='coluna2'>{/*coluna2*/}</p>
          <p className='formadepagamento'>Forma de Pagamento</p>
          <p className='valoraserrecebido'>Valor a Ser Recebido</p>
          <p className='valorasercobrado'>Valor a Ser Cobrado</p>
          <p className='debito'>Débito</p>
          <p className='creditoavista'>Crédito à Vista</p>
          <p className='creditoparcelado'>Crédito Parcelado</p>

      </h2> 
      <h3>{/*Guia de Navegação*/}
          <p className='injusta'>Injusta</p>
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
          <p className='seta1'>{/*seta1*/}</p>
          <p className='seta2'>{/*seta2*/}</p>
          <p className='seta3'>{/*seta3*/}</p>
          <p className='seta4'>{/*seta4*/}</p>
          <p className='seta5'>{/*seta5*/}</p>
          <p className='seta6'>{/*seta6*/}</p>
      </h3>
    </div>
    
  )
}


