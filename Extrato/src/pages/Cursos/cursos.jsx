import Videos from '../../components/Cursos/headerCursos'
import VideosBloco2 from '../../components/Cursos/bloco2'
import './cursos.css'

function Cursos() {
    return (
        <>
            <div id='cursos'>
                <div className="title_cursos">
                    <h1>Cursos</h1>
                </div>
                <Videos 
                    title="Metodologias Ágeis" 
                    video_1="https://www.youtube.com/embed/5ByWvpW2zw0" 
                    video_2="https://www.youtube.com/embed/-iKtTNZ02-Y"
                    title_video_1="O que são e para que serve Metodologias Ágeis?"
                    title_video_2="SCRUM, como implementar no seu dia a dia"  
                />
                <VideosBloco2
                    video="https://www.youtube.com/embed/S9JmZMDLauA"   
                    title_video="Duplo diamante na prática"
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