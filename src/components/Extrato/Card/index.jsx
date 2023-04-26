import cardStyle from "./styles.module.css"

function Card(props) {
    return(
        <div className={cardStyle.card}>
            <strong>{props.date}</strong>
            <strong>{props.name}</strong>
            {props.amount < 0 ? <strong className={cardStyle.red}>R$ {props.amount}</strong> : <strong className={cardStyle.green}>R${props.amount}</strong>}
        </div>
    )
}

export default Card