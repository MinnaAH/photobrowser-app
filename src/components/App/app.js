import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from "react-router-dom";
import { getPhotos } from '../../redux/actions/photos';
import Thumbnail from '../Thumbnail/thumbnail';
import Grid from '../Grid/grid';
import Details from '../Details/details';
import './app.css';

const App = () => {
  const dispatch = useDispatch();
    const thumbnailsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const photos = useSelector(state => state.photos.photos);
  
    const thumbnails = photos.map((photo) => {
      return <Link key={photo.id} to={`/photo/${photo.id}`}><Thumbnail thumbnail={photo} /></Link>;
    });
  
    useEffect(() => {
      dispatch(getPhotos((currentPage-1)*thumbnailsPerPage));
    })
    return(
      <div>
      <Link to="/"></Link>
      <Link to="/photo/:photoId"></Link>
      <Switch>
        <Route exact path="/">
          <Grid thumbnails={thumbnails} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path={`/photo/:photoId`}>
            <Details photos={photos} />
        </Route>
      </Switch>
      </div>
  )
}
export default App;