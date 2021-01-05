import React from 'react';
import './thumbnail.css';

const Thumbnail = ({thumbnail}) => {
    return(
        <div className="thumbnail">
            <img
                src={thumbnail.thumbnailUrl}
                alt={thumbnail.title}
            />
        </div>
    )
}

export default Thumbnail;