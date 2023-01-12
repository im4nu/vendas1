'use client'

export default function YoutubeVideo(){
    return(
        <>
            <iframe 
                className="hidden lg:flex mx-6 my-4"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/0mec5Rm7gcs?controls=0" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{borderRadius: 8, width: '80vw', height: '35vw'}}> 
            </iframe>
            
            <iframe 
                className="flex lg:hidden"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/0mec5Rm7gcs?controls=0" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{borderRadius: 8, width: '80vw', height: '50vw'}}> 
            </iframe>
        </>
    )
}