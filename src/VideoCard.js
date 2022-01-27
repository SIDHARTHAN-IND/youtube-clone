import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="VideoCard"> 
            <img className="VideoCard_thumbnail" src={image} alt="" />
            <div className="VideoCard_info">
                <Avatar className="VideoCard_Avatar" alt={channel} src={channelImage} />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}.{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
