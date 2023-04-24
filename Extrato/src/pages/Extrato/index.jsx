import Header from '../../components/Extrato/Header/index'
import Card from '../../components/Extrato/Card/index'
import './styles.css'
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'

export default function Extrato() {
  
  return (
    <>
      <Sidebar />
      <div className="screen">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Card />
        </div>
      </div>
    </>
  )
}
