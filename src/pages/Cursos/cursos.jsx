import Videos from '../../components/Cursos/headerCursos'
import cursosStyle from "./cursos.module.css"
import Sidebar from '../../components/Inicio/Sidebar/Sidebar'
import ButtonSidebar from '../../components/Inicio/Button/buttonSidebar'

function Cursos() {
    return (
        <>
            <Sidebar />
            <div className={cursosStyle.cursos}>
                <div className={cursosStyle.title_cursos}>
                    <div>
                        <ButtonSidebar/>
                    </div>
                    <h1 className={cursosStyle.cursosH1}>Cursos</h1>
                </div>
                <Videos 
                    title="Metodologias Ágeis" 
                    video_1="https://www.youtube.com/embed/5ByWvpW2zw0" 
                    video_2="https://www.youtube.com/embed/-iKtTNZ02-Y"
                    title_video_1="O que são e para que serve Metodologias Ágeis?"
                    title_video_2="SCRUM, como implementar no seu dia a dia"  
                />

                <Videos 
                    title="Vender na prática" 
                    video_1="https://www.youtube.com/embed/qWSzguf5mZ4" 
                    video_2="https://www.youtube.com/embed/ueyN5i88daY"
                    title_video_1="Como aumentar suas vendas?"
                    title_video_2="Atendimento ao cliente da melhor forma"  
                />

                
                <Videos 
                    title="Como a internet pode melhorar suas vendas?" 
                    video_1="https://www.youtube.com/embed/c4DbXldEEhM" 
                    video_2="https://www.youtube.com/embed/pFjJ0gG3MlU"
                    title_video_1="Tráfego pago do zero"
                    title_video_2="Como um ecommerce pode te ajudar?"  
                />
            </div>
        </>
    )
}

export default Cursos