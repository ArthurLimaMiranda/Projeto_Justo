import './cursosComponents.css'

function VideosBloco2({ video, title_video}) {
    return (
        <>
            <div className="blocoVideos">
                <iframe width="560" height="315" src={video} frameborder="0" allowFullScreen></iframe>
                <h2>{title_video}</h2>
            </div>

        </>
    )
}

export default VideosBloco2