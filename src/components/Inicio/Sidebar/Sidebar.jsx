import sidebarStyle from "./Sidebar.module.css"
import SidebarItem from '../SidebarItem/SidebarItem'

function Sidebar(props) {
  return (
    <>


        <div className={sidebarStyle.sidebar}>
            <div className={sidebarStyle.sidebarTitle}>
              <h1>Justa</h1>
            </div>
            <div className={sidebarStyle.sidebarBloco}>
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
