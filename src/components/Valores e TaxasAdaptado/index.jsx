import vtStyle from "./main.module.css"
export function Valor(props){
    
    return(
        <div className={vtStyle.Coluna2}>
            <strong className={vtStyle.griditem}>R${props.debito}</strong>
            <strong className={vtStyle.griditem}>R${props.recdebito}</strong>
            <strong className={vtStyle.griditem}>R${props.creditovista}</strong>
            <strong className={vtStyle.griditem}>R${props.reccreditovista}</strong>
            <strong className={vtStyle.griditem}>R${props.creditoparcelado}</strong>
            <strong className={vtStyle.griditem}>R${props.recparcelado}</strong>
        </div>

    );
}