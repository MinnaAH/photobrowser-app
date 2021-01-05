import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from "react-router-dom";
import { getPhotos } from '../../redux/actions/photos';
import Thumbnail from '../Thumbnail/thumbnail';
import Grid from '../Grid/grid';
import Details from '../Details/details';
import './app.css';

const App = () => {
    let thumbnails;
    const dispatch = useDispatch();
    const thumbnailsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const photos = useSelector(state => state.photos.photos);
    const loading = useSelector(state => state.photos.loading);
    const error = useSelector(state => state.photos.error);

    if (photos.length > 0 ) {
      thumbnails = photos.map((photo) => {
        return <Link key={photo.id} to={`/photo/${photo.id}`}><Thumbnail thumbnail={photo} /></Link>;
      });
    }

    useEffect(() => {
      dispatch(getPhotos((currentPage-1)*thumbnailsPerPage));
    },[currentPage]);

    return(
      <div>
        <div style={{ display: !error && !loading && photos.length > 0? "none" : "block" }} className="frame">
          <div style={{ display: loading ? "block" : "none" }} className="loader"></div>
          <p style={{ display: error && !loading ? "block" : "none" }} className="error">
            Error occured on page! <br/>
            {error}
          </p>
          <p style={{ display: !error && !loading && photos.length === 0 ? "block" : "none" }} className="noPhotos">
            No photos found
          </p>
        </div>
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