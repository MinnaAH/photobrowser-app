import React from 'react';
import './thumbnail.css';

const Thumbnail = (props) => {
    return(
        <div className="thumbnail">
            <img
                src={props.thumbnail.thumbnailUrl}
                alt={props.thumbnail.title}
            />
        </div>
    )
}

export default Thumbnail;