import * as type from '../types';

export function getPhotos(start) {
  return { 
    type: type.GET_PHOTOS_REQUESTED,
    payload: start
  }
}