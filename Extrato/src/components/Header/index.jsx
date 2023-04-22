import './styles.css'
import {FaArrowLeft} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

export function Header() {

    return (
        <div className="header">
            <div className="menubar">
                <button id="back"><FaArrowLeft /></button>
                <strong>EXTRATO</strong>
                <button><FaBars /></button>
            </div>
            <br></br>
            <div className="balance">
                <strong>Saldo:</strong>
                <p>R$????</p>
                <button><FaEye /></button>
            </div>
        </div>
    )
}