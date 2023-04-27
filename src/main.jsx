import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Cursos from './pages/Cursos/cursos';
import Index from './pages/Lancamentos/index';
import Extrato from './pages/Extrato/index';
import Simulacao from './pages/SimulacaoAdaptado/Index';
import Emprestimo from './pages/Emprestimo/index';

import './styles/global.css'
import Graficos from './pages/Graficos/graficos';
import Sidebar_mobile from './components/Inicio/Sidebar_mobile/Sidebar_mobile';

const routes = ReactDOM.createRoot(document.getElementById('root'));

routes.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>
          <Route exact path='/' static element={<Extrato />} />
          <Route exact path='/Inicio' static element={<Sidebar_mobile />} />
          <Route exact path='/Lancamentos' static element={<Index />} />
          <Route exact path='/Cursos' static element={<Cursos />} />
          <Route exact path='/Simulacao' static element={<Simulacao />} />
          <Route exact path='/Emprestimo' static element={<Emprestimo />} />
          <Route exact path='/Grafico' static element={<Graficos />} />
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
)

