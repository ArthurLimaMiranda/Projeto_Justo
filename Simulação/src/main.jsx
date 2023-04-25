import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home'
import "./Styles Responsivo/desktop.css"
import "./Styles Responsivo/tablet.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)