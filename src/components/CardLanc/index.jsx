import React from 'react';
import CardStyle from "./style.module.css";


export function CardLanc(props){
    return(
        <div className={CardStyle.lanc}>
            <h3 className={CardStyle.tipo}><strong className={CardStyle.MP}>{props.modoPagamento}</strong></h3>
            <h6><strong className={CardStyle.Val}>Valor: <span className = {props.lancamaneto=="Despesas" ? (CardStyle.desp) : (CardStyle.receb)}>R${props.valor}</span></strong></h6>
            <span className={CardStyle.layer}>
                <h6><span className={CardStyle.classe}>Tipo: {props.lancamaneto}</span></h6>   
                <span className={CardStyle.layer2}>
                    <h6><span className={CardStyle.dataC}>Gerado:   {props.dataCriado}</span></h6>                     
                    <h6><span className={CardStyle.dataD}>Debitado: {props.dataDebito}</span></h6>                      
                </span>                     
            </span>
        </div>
    )
}