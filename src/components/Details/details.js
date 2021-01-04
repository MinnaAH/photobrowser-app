import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import './details.css';

const Details = ({photos}) => {
    const { photoId } = useParams();
    const history = useHistory();
    const photo = photos.find(dataItem => dataItem.id === Number(photoId));

    return(
        <div>
            <div className="header">
                <h1 className="detailsHeadline">{photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</h1>
                <button onClick={() => {history.goBack()}} className="detailsButton">Go Back</button>
            </div>
            <div className="photo">
                <img
                    src={photo.url}
                    alt={photo.title}
                />
            </div>
        </div>
    )
}

export default Details;