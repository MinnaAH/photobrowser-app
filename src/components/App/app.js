import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../redux/actions/photos';

const App = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [])

  return (
    <h1>Photobrowser App</h1>
  )
}
export default App;