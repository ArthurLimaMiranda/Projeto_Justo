import React, { useState, useEffect } from 'react';
import Graph from '../../components/Graficos/grafic'
import Sidebar from '../../components/Inicio/Sidebar/Sidebar';
import './graficos.css'

function Graficos() {
  const [selectAno, setSelectAno] = useState("");

  const [mostrarComponente, setMostrarComponente] = useState(false);

  const checkboxAno = (event) => {
    setSelectAno(event.target.value);
  };

  const despesasPorMes = [
      {
        "id": 1,
        "2022": [
          {
            "id": 1,
            "mes": "Julho",
            "ano": "2022",
            "valor": 1200.17
          },
          {
            "id": 1,
            "mes": "Agosto",
            "ano": "2022",
            "valor": 978.12
          },
          {
            "id": 1,
            "mes": "Setembro",
            "ano": "2022",
            "valor": 1789.17
          },
          {
            "id": 1,
            "mes": "Outubro",
            "ano": "2022",
            "valor": 120.98
          },
          {
            "id": 1,
            "mes": "Novembro",
            "ano": "2022",
            "valor": 2312.32
          },
          {
            "id": 1,
            "mes": "Dezembro",
            "ano": "2022",
            "valor": 1982.17
          },
      
        ]
      },
      {
        "id": 1,
        "2023": [
          {
            "id": 1,
            "mes": "Janeiro",
            "ano": "2023",
            "valor": 1534.17
          },
          {
            "id": 1,
            "mes": "Fevereiro",
            "ano": "2023",
            "valor": 982.12
          },
          {
            "id": 1,
            "mes": "Março",
            "ano": "2023",
            "valor": 1234.17
          },
          {
            "id": 1,
            "mes": "Abril",
            "ano": "2023",
            "valor": 876.98
          },
          {
            "id": 1,
            "mes": "Maio",
            "ano": "2023",
            "valor": 2314.32
          },
          {
            "id": 1,
            "mes": "Junho",
            "ano": "2023",
            "valor": 762.17
          }
        ]
      },
  ]

  const recebiveisPorMes = [
    {
      "id": 1,
      "2022": [
        {
          "id": 1,
          "mes": "Julho",
          "ano": "2022",
          "valor": 3200.17
        },
        {
          "id": 1,
          "mes": "Agosto",
          "ano": "2022",
          "valor": 3128.12
        },
        {
          "id": 1,
          "mes": "Setembro",
          "ano": "2022",
          "valor": 1829.17
        },
        {
          "id": 1,
          "mes": "Outubro",
          "ano": "2022",
          "valor": 5120.98
        },
        {
          "id": 1,
          "mes": "Novembro",
          "ano": "2022",
          "valor": 9312.32
        },
        {
          "id": 1,
          "mes": "Dezembro",
          "ano": "2022",
          "valor": 4332.17
        },
    
      ]
    },
    {
    "id": 1,
    "2023": [
      {
        "id": 1,
        "mes": "Janeiro",
        "ano": "2023",
        "valor": 5603.21
      },
      {
        "id": 1,
        "mes": "Fevereiro",
        "ano": "2023",
        "valor": 1382.21
      },
      {
        "id": 1,
        "mes": "Março",
        "ano": "2023",
        "valor": 2300.21
      },
      {
        "id": 1,
        "mes": "Abril",
        "ano": "2023",
        "valor": 4523.12
      },
      {
        "id": 1,
        "mes": "Maio",
        "ano": "2023",
        "valor": 7839.02
      },
      {
        "id": 1,
        "mes": "Junho",
        "ano": "2023",
        "valor": 2391.21
      }
    ]
  }
  ]

  const extratoPorMes = [
    {
      "id": 1,
      "2022": [
        {
          "id": 1,
          "mes": "Julho",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][0].valor - despesasPorMes[0]["2022"][0].valor).toFixed(2)
        },
        {
          "id": 1,
          "mes": "Agosto",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][1].valor - despesasPorMes[0]["2022"][1].valor).toFixed(2)
        },
        {
          "id": 1,
          "mes": "Setembro",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][2].valor - despesasPorMes[0]["2022"][2].valor).toFixed(2)
        },
        {
          "id": 1,
          "mes": "Outubro",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][3].valor - despesasPorMes[0]["2022"][3].valor).toFixed(2)
        },
        {
          "id": 1,
          "mes": "Novembro",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][4].valor - despesasPorMes[0]["2022"][4].valor).toFixed(2)
        },
        {
          "id": 1,
          "mes": "Dezembro",
          "ano": "2022",
          "valor": (recebiveisPorMes[0]["2022"][5].valor - despesasPorMes[0]["2022"][5].valor).toFixed(2)
        },
    
      ]
    },
    {
    "id": 1,
    "2023": [
      {
        "id": 1,
        "mes": "Janeiro",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][0].valor - despesasPorMes[1]["2023"][0].valor).toFixed(2)
      },
      {
        "id": 1,
        "mes": "Fevereiro",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][1].valor - despesasPorMes[1]["2023"][1].valor).toFixed(2)
      },
      {
        "id": 1,
        "mes": "Março",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][2].valor - despesasPorMes[1]["2023"][2].valor).toFixed(2)
      },
      {
        "id": 1,
        "mes": "Abril",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][3].valor - despesasPorMes[1]["2023"][3].valor).toFixed(2)
      },
      {
        "id": 1,
        "mes": "Maio",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][4].valor - despesasPorMes[1]["2023"][4].valor).toFixed(2)
      },
      {
        "id": 1,
        "mes": "Junho",
        "ano": "2023",
        "valor": (recebiveisPorMes[1]["2023"][5].valor - despesasPorMes[1]["2023"][5].valor).toFixed(2)
      }
    ]
  }
]

  var filtroDespesas = []
  var filtroRecebiveis = []
  var filtroExtrato = []
  
  var meses = []




  
  if (selectAno == "2022") {
    filtroDespesas = despesasPorMes[0]["2022"].map(despesas => despesas.valor)
    filtroRecebiveis = recebiveisPorMes[0]["2022"].map(recebiveis => recebiveis.valor)
    filtroExtrato = extratoPorMes[0]["2022"].map(extrato => extrato.valor)
    meses = ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  } else if (selectAno == "2023") {
    filtroDespesas = despesasPorMes[1]["2023"].map(despesas => despesas.valor)
    filtroRecebiveis = recebiveisPorMes[1]["2023"].map(recebiveis => recebiveis.valor)
    filtroExtrato = extratoPorMes[1]["2023"].map(extrato => extrato.valor)
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
  }
 
  const handleClick = () => {
    setMostrarComponente(true);
  }

  return (
    <>
    <Sidebar/>
      <div id='page_grafic'>
        <h1>Gráficos</h1>
        <div className='checkbox'>
          <h3>Escolha o Ano que você quer acessar</h3>
          <label>
            <input
              type="radio"
              name="option"
              value="2022"
              checked={selectAno === "2022"}
              onChange={checkboxAno}
            />
            2022
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="2023"
              checked={selectAno === "2023"}
              onChange={checkboxAno}
            />
            2023
          </label>
        </div>
        <button onClick={handleClick}>
          Mostrar Gráficos
        </button>

        {
          mostrarComponente &&   
          <>    
            <Graph 
              title="Extrato"
              mes_1={meses[0]}
              mes_2={meses[1]}
              mes_3={meses[2]}
              mes_4={meses[3]}
              mes_5={meses[4]}
              mes_6={meses[5]}
              valor_1={parseFloat(filtroExtrato[0])}
              valor_2={parseFloat(filtroExtrato[1])}
              valor_3={parseFloat(filtroExtrato[2])}
              valor_4={parseFloat(filtroExtrato[3])}
              valor_5={parseFloat(filtroExtrato[4])}
              valor_6={parseFloat(filtroExtrato[5])}
            />
            <Graph 
              title="Despesas"
              mes_1={meses[0]}
              mes_2={meses[1]}
              mes_3={meses[2]}
              mes_4={meses[3]}
              mes_5={meses[4]}
              mes_6={meses[5]}
              valor_1={parseFloat(filtroDespesas[0])}
              valor_2={parseFloat(filtroDespesas[1])}
              valor_3={parseFloat(filtroDespesas[2])}
              valor_4={parseFloat(filtroDespesas[3])}
              valor_5={parseFloat(filtroDespesas[4])}
              valor_6={parseFloat(filtroDespesas[5])}
            />
            <Graph 
              title="Recebíveis"
              mes_1={meses[0]}
              mes_2={meses[1]}
              mes_3={meses[2]}
              mes_4={meses[3]}
              mes_5={meses[4]}
              mes_6={meses[5]}
              valor_1={parseFloat(filtroRecebiveis[0])}
              valor_2={parseFloat(filtroRecebiveis[1])}
              valor_3={parseFloat(filtroRecebiveis[2])}
              valor_4={parseFloat(filtroRecebiveis[3])}
              valor_5={parseFloat(filtroRecebiveis[4])}
              valor_6={parseFloat(filtroRecebiveis[5])}
            />
          </>
        }
      </div>
    </>
  );
}

export default Graficos;
