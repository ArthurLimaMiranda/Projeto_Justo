import vtStyle from "./main.module.css"
export function Valor(props){
    
    return(
        <div className={vtStyle.Coluna2}>
            <strong className={vtStyle.griditem}>Forma de Pagamento</strong>
            <strong className={vtStyle.griditem}>Valor a Ser Recebido</strong>
            <strong className={vtStyle.griditem}>Valor a Ser Cobrado</strong>
            <strong className={vtStyle.griditem}>Débito</strong>
            <strong className={vtStyle.griditem}>R${props.debito}</strong>
            <strong className={vtStyle.griditem}>R${props.recdebito}</strong>
            <strong className={vtStyle.griditem}>Crédito à Vista</strong>
            <strong className={vtStyle.griditem}>R${props.creditovista}</strong>
            <strong className={vtStyle.griditem}>R${props.reccreditovista}</strong>
            <strong className={vtStyle.griditem}>Crédito Parcelado</strong>
            <strong className={vtStyle.griditem}>R${props.creditoparcelado}</strong>
            <strong className={vtStyle.griditem}>R${props.recparcelado}</strong>
        </div>

    );
}