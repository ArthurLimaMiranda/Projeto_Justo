import React from 'react';
import { VictoryPie } from 'victory';
import './grafic.css'

function Graph({title, mes_1, mes_2, mes_3, mes_4, mes_5, mes_6, valor_1, valor_2, valor_3, valor_4, valor_5, valor_6, descricao}) {
    const data = [
        { x: mes_1, y: valor_1 },
        { x: mes_2, y: valor_2 },
        { x: mes_3, y: valor_3 },
        { x: mes_4, y: valor_4 },
        { x: mes_5, y: valor_5 },
        { x: mes_6, y: valor_6 }
      ];
//
    return (
        <>
            <div id="grafico">
                <h1>{title}</h1>
                <VictoryPie
                    data={data}
                    labels={({ datum }) => `${datum.x}: R$${datum.y}`}

                    style={{
                        labels: { fontSize: 12, fill: "black" },
                        data: {
                        fillOpacity: 0.9,
                        stroke: "#fff",
                        strokeWidth: 1,
                        },
                    }}
                    innerRadius={10} // define o tamanho do buraco no meio
                    labelRadius={120} // define o raio para os rótulos
                
            
                    width={600}
                    height={500}
                />
            </div>
        </>
    );
}

export default Graph;