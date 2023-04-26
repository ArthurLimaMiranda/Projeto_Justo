import React from 'react';
import Graph from '../../components/Graficos/grafic';
import './graficos.css'


function Graficos() {
  

  return (
    <div>
      <h1>Gráfico de vendas</h1>
      <div className="grafic">
        <Graph 
          title="Extrato"
          mes_1="Janeiro"
          mes_2="Fevereiro"
          mes_3="Março"
          mes_4="Abril"
          mes_5="Maio"
          mes_6="Junho"
          valor_1={212}
          valor_2={2121}
          valor_3={2121}
          valor_4={2121}
          valor_5={2121}
          valor_6={2121}
        />
        <Graph 
          title="Despesas"
          mes_1="Janeiro"
          mes_2="Fevereiro"
          mes_3="Março"
          mes_4="Abril"
          mes_5="Maio"
          mes_6="Junho"
          valor_1={212}
          valor_2={2121}
          valor_3={2121}
          valor_4={2121}
          valor_5={2121}
          valor_6={2121}
        />
        <Graph 
          title="Recebíveis"
          mes_1="Janeiro"
          mes_2="Fevereiro"
          mes_3="Março"
          mes_4="Abril"
          mes_5="Maio"
          mes_6="Junho"
          valor_1={212}
          valor_2={2121}
          valor_3={2121}
          valor_4={2121}
          valor_5={2121}
          valor_6={2121}
        />
      </div>
      
    </div>
  );
}

export default Graficos;