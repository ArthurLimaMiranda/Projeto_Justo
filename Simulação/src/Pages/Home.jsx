import { useState } from 'react'
import "./simuladorpage.css"
import "./guiadenavegação.css"
import "./tabela.css"
import "../Styles Responsivo/desktop.css"
import "../Styles Responsivo/tablet.css"

import { Valor } from"../Componentes/Valores e Taxas/index";




export function Home() {

  const [Voriginal, setVoriginal] = useState("");
  
  const [Juros, setJuros] = useState("");
  
  const [Parcelas, setParcelas] = useState("");
  
  const [Forma, setForma] = useState("");

  var debito = (parseFloat(Voriginal) + parseFloat(Voriginal*(Juros/100))).toFixed(2) ;
  
  var credito = (parseFloat(Voriginal)+ parseFloat(Voriginal*(Juros/100))).toFixed(2) ;
  
  var vfinal = (parseFloat(Voriginal*(1 + Juros/100)**Parcelas)).toFixed(2) ;
  
  var Rdebito = (parseFloat(Voriginal) - parseFloat(Voriginal*(Juros/100))).toFixed(2) ;

  var Rfinal =  (parseFloat(Voriginal)  -  ((parseFloat(vfinal) - parseFloat(Voriginal))/parseFloat(Voriginal))).toFixed(2);

  var valores = new Array();


  function valorcobrado(Forma){

      switch(Forma){

        case "debito" :         
         valores[0] = debito;
         valores[1] = 0;
         valores[2] = 0;
         valores[3] = Rdebito;
         valores[4] = 0;
         valores[5] = 0;
         return valores;        

        case "credito a vista" :      
          valores[0] = 0;
          valores[1] = credito;
          valores[2] = 0;
          valores[3] = 0;
          valores[4] =  Rdebito;
          valores[5] = 0;
          return valores;
         

        case "credito parcelado":         
          valores[0] = 0;
          valores[1] = 0;
          valores[2] = vfinal;
          valores[3] = 0;
          valores[4] = 0;
          valores[5] = Rfinal;
          return valores;
          

      }
  }

  valorcobrado(Forma);


  return (
    <div className='Desktop'>
      
      <h1>
        <p className="simuladordevendas">Simulador de Vendas</p>
      </h1>
      
      <h2>{/*Background 2*/}
          <p className='valordoproduto'>Valor do Produto</p>
          <p className='pagamento'>Forma de Pagamento</p>
          <p className='taxadamaquininha'>Taxa da Maquininha</p>
          <p className='ndeparcelas'>Nº de Parcelas</p>

          {/*Tabela e seus Elementos*/}
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
          <p className='espaço1'></p>
          
          

          {/*Inputs e seus Elementos*/}
          <input type='number' className='rs' onChange={e => setVoriginal(e.target.value)}/>
          <input type='number' className='taxa'onChange={e => setJuros(e.target.value)} />
          <input type='text' className='pagamentos' onChange={e => setForma(e.target.value)}/>
          <input type='number' className='parcela' onChange={e => setParcelas(e.target.value)}/>
          <p className='section1'>{/*section1*/} </p>
          <p className='section2'>{/*section2*/} </p>
          <p className='section3'>{/*section3*/} </p>
          <p className='money'>R$</p>
          <p className='juros'>%</p>
          <p className='vezes'>X</p>

      
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
          
      </h3>

    <Valor debito= {valores[0]} creditovista = {valores[1]} creditoparcelado = {valores[2]} 
    recdebito = {valores[3]} reccreditovista= {valores[4]} recparcelado = {valores[5]} />

    </div>
    
  )
}
