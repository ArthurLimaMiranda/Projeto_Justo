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
              <SidebarItem href="http://localhost:5173/Extrato" itemName="Extrato" />
              <SidebarItem href="http://localhost:5173/Simulacao" itemName="Simulação" />
              <SidebarItem href="http://localhost:5173/Lancamentos" itemName="Lançamentos" />
              <SidebarItem href="http://localhost:5173/Emprestimo" itemName="Empréstimo" />
              <SidebarItem href="http://localhost:5173/" itemName="Gráficos" />
              <SidebarItem href="http://localhost:5173/Cursos" itemName="Cursos" />
            </div>
        </div>    
    </>
  )
}

export default Sidebar
