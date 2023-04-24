import "./valor.css"

export function Valor(props){

    return(
        <div>
            <strong className="Vdebito">R${props.debito}</strong>
            <strong className="Vcredito">R${props.creditovista}</strong>
            <strong className="Vparcelado">R${props.creditoparcelado}</strong>
        </div>

    );
}