import headerStyle from "./styles.module.css"
import { useState } from 'react';
import {FaArrowLeft} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

function Header(props) {
    const [showValue, setShowValue] = useState(false)

    return (
        <div className={headerStyle.header}>
            <div className={headerStyle.menubar}>
                <button><FaArrowLeft /></button>
                <h1>EXTRATO</h1>
                <button onClick={props.toggle}><FaBars /></button>
            </div>
            <br></br>
            <div className={headerStyle.balance}>
                <strong>Saldo:</strong>
                { showValue ? <strong >R${props.balance}</strong> : <div className={headerStyle.hidden}></div>}
                <button onClick={() => setShowValue(!showValue)}><FaEye /></button>
            </div>
        </div>
    )
}

export default Header