import React from 'react';
import { useState } from 'react'
import simulStyle from "./styles.module.css"
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'
import { Valor } from "../../components/Valores e TaxasAdaptado/index";

function Simulacao() {

    const [Voriginal, setVoriginal] = useState("");

    const [Juros, setJuros] = useState("");

    const [Parcelas, setParcelas] = useState("");

    const [Forma, setForma] = useState("");

    var debito = (parseFloat(Voriginal) + parseFloat(Voriginal * (Juros / 100))).toFixed(2);

    var credito = (parseFloat(Voriginal) + parseFloat(Voriginal * (Juros / 100))).toFixed(2);

    var vfinal = (parseFloat(Voriginal * (1 + Juros / 100) ** Parcelas)).toFixed(2);

    var Rdebito = (parseFloat(Voriginal) - parseFloat(Voriginal * (Juros / 100))).toFixed(2);

    var Rfinal = (parseFloat(Voriginal) - ((parseFloat(vfinal) - parseFloat(Voriginal)) / parseFloat(Voriginal))).toFixed(2);

    var valores = new Array();


    function valorcobrado(Forma) {

        switch (Forma) {

            case "debito":
                valores[0] = debito;
                valores[1] = 0;
                valores[2] = 0;
                valores[3] = Rdebito;
                valores[4] = 0;
                valores[5] = 0;
                return valores;

            case "credito a vista":
                valores[0] = 0;
                valores[1] = credito;
                valores[2] = 0;
                valores[3] = 0;
                valores[4] = Rdebito;
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
        <>
        <div className={simulStyle.Desktop}>

          <div className={simulStyle.Navegacao}>
            <Sidebar />
          </div>

          <div className={simulStyle.Simulator}>

            <div className={simulStyle.Titulo}>
              <a href='http://localhost:5173/Inicio' className={simulStyle.retorno}> <h2>{'<'}</h2> </a>
              <h1>Simulador de Vendas</h1>
            </div>

          <div className={simulStyle.Conteudo}>

            <div className={simulStyle.Linha1}>
              <div className={simulStyle.valordoproduto}><h3>Valor do Produto R$</h3></div>
              <input type='number' className={simulStyle.rs} onChange={e => setVoriginal(e.target.value)} />
              <input type='number' className={simulStyle.taxa} onChange={e => setJuros(e.target.value)} />
              <div className={simulStyle.taxadamaquininha}><h3>Taxa da Maquininha %</h3></div>
            </div>

            <div className={simulStyle.Linha2}>
              <div className={simulStyle.pagamento}><h3>Forma de Pagamento</h3></div>
              <input type='text' className={simulStyle.pagamentos} onChange={e => setForma(e.target.value)} />
              <input type='number' className={simulStyle.parcela} onChange={e => setParcelas(e.target.value)} />
              <div className={simulStyle.ndeparcelas}><h3>Nº de Parcelas</h3></div>
            </div>

            <div className={simulStyle.Fim}>
              <Valor debito={valores[0]} creditovista={valores[1]} creditoparcelado={valores[2]} recdebito={valores[3]}
                reccreditovista={valores[4]} recparcelado={valores[5]} />
            </div>

          </div >

            
              
            </div>
          </div>   
        </>

    )
}

export default Simulacao;
