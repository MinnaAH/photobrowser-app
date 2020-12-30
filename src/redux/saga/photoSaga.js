import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = `http://jsonplaceholder.typicode.com/photos`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchPhotos() {
   try {
      const photos = yield call(getApi);
      yield put({type: 'GET_PHOTOS_SUCCESS', photos: photos});
   } catch (e) {
      yield put({type: 'GET_PHOTOS_FAILED', message: e.message});
   }
}

function* photoSaga() {
   yield takeEvery('GET_PHOTOS_REQUESTED', fetchPhotos);
}

export default photoSaga;