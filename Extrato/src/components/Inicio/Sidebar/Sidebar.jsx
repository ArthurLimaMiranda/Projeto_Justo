import "./Sidebar.css"
import SidebarItem from '../SidebarItem/SidebarItem'

function Sidebar() {
  return (
    <>
        <div id='sidebar'>
            <div id="sidebarTitle">
              <h1>Justa</h1>
            </div>
            <div id="sidebarBloco">
              <SidebarItem href="http://localhost:5173/extrato" itemName="Extrato" />
              <SidebarItem href="http://localhost:5173/" itemName="Simulação" />
              <SidebarItem href="http://localhost:5173/" itemName="Recebíveis" />
              <SidebarItem href="http://localhost:5173/" itemName="Pagar boletos" />
              <SidebarItem href="http://localhost:5173/" itemName="Empréstimo" />
              <SidebarItem href="http://localhost:5173/" itemName="Gráficos" />
              <SidebarItem href="http://localhost:5173/" itemName="Cursos" />
            </div>
        </div>    
    </>
  )
}

export default Sidebar
