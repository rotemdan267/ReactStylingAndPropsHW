import React from "react";

function YoutubeVideoComp(props) {
    return (<>
        <li>
            {
                console.log(props.video)
            }
            <h3>{props.video.title}</h3>
            <iframe width={props.video.width} height={props.video.height} src={props.video.youtubeurl} title={props.video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscree></iframe>
        </li>
    </>);
}

export function YoutubeVideoListComp(props) {
    return (<>
        <h2>YouTube Videos:</h2>
        <ul>
            {
                props.YoutubeVideos.map((video) => <YoutubeVideoComp video={video}></YoutubeVideoComp>)
            }
        </ul>
    </>);
}