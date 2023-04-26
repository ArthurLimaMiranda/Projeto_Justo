import './cursosComponents.css'


function Videos({title, video_1, video_2, title_video_1, title_video_2}) {
    return (
        <>
        <div id="coluna_videos">
            <h1 className='title'>{title}</h1>
            <div id="container_videos">
                <div className="blocoVideos">
                    <iframe width="560" height="315" src={video_1} frameborder="0" allowFullScreen></iframe>
                    <h2>{title_video_1}</h2>
                </div>
                <div className="blocoVideos2">
                    <iframe width="560" height="315" src={video_2} frameborder="0" allowFullScreen></iframe>
                    <h2 className='title_videos'>{title_video_2}</h2>
                </div>
            </div>
        </div>


            
        </>
    )
}

export default Videos