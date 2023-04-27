import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import SidebarStyle from "./buttonSidebar.module.css"


function ButtonSidebar(props) {
  return (
    <>
        <a href="http://localhost:5173/Inicio" className={SidebarStyle.buttonDivSidebar}>
            <div>    
                <BsFillArrowLeftSquareFill/>
            </div>
        </a>    
    </>
  )
}

export default ButtonSidebar