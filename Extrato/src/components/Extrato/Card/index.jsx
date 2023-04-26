import './styles.css'

function Card(props) {
    return(
        <div className="card">
            <strong>{props.date}</strong>
            <strong>{props.name}</strong>
            {props.amount < 0 ? <strong className='red'>R$ {props.amount}</strong> : <strong className='green'>R${props.amount}</strong>}
        </div>
    )
}

export default Card