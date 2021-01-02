import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../redux/actions/photos';
import Pagination from "../Pagination/pagination";
import Thumbnail from '../Thumbnail/thumbnail';
import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const thumbnailsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const photos = useSelector(state => state.photos.photos);

  const thumbnails = photos.map((photo) => {
    return <Thumbnail key={photo.id} thumbnail={photo} />;
  });

  useEffect(() => {
    dispatch(getPhotos((currentPage-1)*thumbnailsPerPage));
  })

  return (
    <div>
      <div className="headline"><hi>Photobrowser App</hi></div>
       <div className="grid">{thumbnails}</div>
       <div>
         <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
       </div>
    </div>
  )
}
export default App;