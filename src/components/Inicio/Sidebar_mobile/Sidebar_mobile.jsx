import SidebarStyle from "./SidebarM.module.css"
import SidebarItem from '../SidebarItem/SidebarItem'

function Sidebar_mobile() {
  return (
    <>
        <div className={SidebarStyle.sidebar_mobile}>
            <div className={SidebarStyle.sidebarTitle_mobile}>
              <h1>Justa</h1>
            </div>
            <div className={SidebarStyle.sidebarBloco}>
              <SidebarItem href="http://localhost:5173/" itemName="Extrato" />
              <SidebarItem href="http://localhost:5173/Simulacao" itemName="Simulação" />
              <SidebarItem href="http://localhost:5173/Lancamentos" itemName="Lançamentos" />
              <SidebarItem href="http://localhost:5173/Emprestimo" itemName="Empréstimo" />
              <SidebarItem href="http://localhost:5173/Grafico" itemName="Gráficos" />
              <SidebarItem href="http://localhost:5173/Cursos" itemName="Cursos" />
            </div>
        </div>    
    </>
  )
}

export default Sidebar_mobile
