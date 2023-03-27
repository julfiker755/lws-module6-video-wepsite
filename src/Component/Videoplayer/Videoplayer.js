import React from 'react';

const Videoplayer = ({title,link}) => {
    return (
        <iframe
        width="100%"
        class="aspect-video"
        src={link}
        title={title}
        frameborder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    );
};

export default Videoplayer;