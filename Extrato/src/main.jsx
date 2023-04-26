import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cursos from './pages/Cursos/cursos';

import Extrato from './pages/Extrato/index'
import './styles/global.css'

const routes = ReactDOM.createRoot(document.getElementById('root'));

routes.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' static element={<Extrato />} />
        <Route exact path='/Cursos' static element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)