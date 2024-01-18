import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from './utils/contents';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    // return (
        // <div className='flex'>
        //     {videos.map(video => (
        //         <VideoCard key={video.id} info={video} />
        //     ))}
        // </div>
        return (
            <div className='flex'>
                {videos && videos.map(video => (
                    <VideoCard key={video.id} info={video} />
                ))}
            </div>
        );
        
    // );
};

export default VideoContainer;
