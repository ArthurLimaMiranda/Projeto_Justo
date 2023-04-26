import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
     <strong> {props.valor}</strong>
     <p></p>
      <strong>{props.parcelas}</strong>
    </div>
  );
}