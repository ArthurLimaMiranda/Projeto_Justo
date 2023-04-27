
import CardsStyle from "./style.module.css";

export function Card(props) {
  return (
    <div className={CardsStyle.card}>
     <strong> {props.valor}</strong>
     <p></p>
      <strong>{props.parcelas}</strong>
    </div>
  );
}