import MenuStyle from "./styles.module.css";
import { FaArrowLeft } from 'react-icons/fa';


export function Menu() {
  return (
    
    <div className={MenuStyle.menu}>
      <FaArrowLeft />
      <h2>EMPRÉSTIMO</h2>


    </div>
  );
}