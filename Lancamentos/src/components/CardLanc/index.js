import React from 'react';
import './style.css';

export function CardLanc(props){
    return(
        <div className='lanc'>
            <h3 className='tipo'><strong>{props.modoPagamento}</strong></h3>
            <h6><strong className='Val'>Valor: <span className='valor'>R${props.valor}</span></strong></h6>
            <span className='layer'>
                <h6><span className='classe'>Tipo: {props.lancamaneto}</span></h6>   
                <span className='layer2'>
                    <h6><span className='dataC'>Gerado:   {props.dataCriado}</span></h6>                     
                    <h6><span className='dataD'>Debitado: {props.dataDebito}</span></h6>                      
                </span>                     
            </span>
        </div>
    )
}