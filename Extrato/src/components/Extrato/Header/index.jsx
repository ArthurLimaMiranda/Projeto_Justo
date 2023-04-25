import './styles.css'
import { useState } from 'react';
import {FaArrowLeft} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

function Header(props) {
    const [showValue, setShowValue] = useState(false)

    return (
        <div className="header">
            <div className="menubar">
                <button><FaArrowLeft /></button>
                <strong>EXTRATO</strong>
                <button onClick={props.toggle}><FaBars /></button>
            </div>
            <br></br>
            <div className="balance">
                <strong>Saldo:</strong>
                { showValue ? <strong>R${props.balance}</strong> : <div className='hidden'></div>}
                <button onClick={() => setShowValue(!showValue)}><FaEye /></button>
            </div>
        </div>
    )
}

export default Header