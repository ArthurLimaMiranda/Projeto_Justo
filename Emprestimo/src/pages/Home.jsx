
import './styles.css';

import {Card} from '../components/Card';
import {Menu} from '../components/Menu';

function Home() {
  return (
    
    <div className="container">

<Menu />
  
    <h3>Valor do empréstimo </h3>
    <input typ="number" placeholder="(R$ 500 - R$ 10.000)" />
      <p></p>
    <h3>Quantidade de parcelas </h3>
    <input type="number" placeholder="X " />
 
    <p></p>
      <button type="button">Confirmar</button>
      
      <Card v/>  
      
      </div>
    
  )
}

export default Home