import "./valor.css"

export function Valor(props){

    return(
        <div>
            <strong className="Vdebito">R${props.debito}</strong>
            <strong className="Vcredito">R${props.creditovista}</strong>
            <strong className="Vparcelado">R${props.creditoparcelado}</strong>
            <strong className="recdebito">R${props.recdebito}</strong>
            <strong className="reccreditovista">R${props.reccreditovista}</strong>
            <strong className="recparcelado">R${props.recparcelado}</strong>
        </div>

    );
}