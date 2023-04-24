import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Extrato from './pages/Extrato/index'
import './styles/global.css'

const routes = ReactDOM.createRoot(document.getElementById('root'));

routes.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='extrato' static element={<Extrato />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)