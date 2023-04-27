import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Cursos from './pages/Cursos/cursos';
import Index from './pages/Lancamentos/index';
import Extrato from './pages/Extrato/index';
import Simulacao from './pages/SimulacaoAdaptado/Index';
import Emprestimo from './pages/Emprestimo/Index';



import './styles/global.css'

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};


const routes = ReactDOM.createRoot(document.getElementById('root'));

routes.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>

          <Route exact path='/Lancamentos' static element={<Index />} />
          <Route exact path='/Extrato' static element={<Extrato />} />
          <Route exact path='/Cursos' static element={<Cursos />} />
          <Route exact path='/Simulacao' static element={<Simulacao />} />
          <Route exact path='/Emprestimo' static element={<Emprestimo />} />
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
)

