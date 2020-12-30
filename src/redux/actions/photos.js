import * as type from '../types';

export function getPhotos() {
  return { 
    type: type.GET_PHOTOS_REQUESTED
  }
}