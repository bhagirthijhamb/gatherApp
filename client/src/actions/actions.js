import {
  GET_ROOM_NAME,
  GET_ROOM_URL,
  ROOM_LOADING,
  ON_ERROR,
  TOGGLE_PUB_AUDIO,
  TOGGLE_PUB_VIDEO,
  TOGGLE_SUB_AUDIO,
  TOGGLE_SUB_VIDEO,
} from "./types";
import axios from 'axios';

export const getRoomDetails = (name) => (dispatch) => {
  dispatch(setRoomLoading());
  axios.get(`http://localhost:5000/room/${name}`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_ROOM_URL,
                payload: res.data
            })
        })
        .catch(error => {
            console.log('Error', error);
        })
}

export const setRoomName = (name) => {
    // console.log('setRoomName =', name)
    return {
        type: GET_ROOM_NAME,
        payload: name
    }
}

export const setRoomLoading = () => {
  return {
    type: ROOM_LOADING,
  };
};

export const onError = (error) => {
  return {
    type: ON_ERROR,
    payload: error
  };
};

export const togglePublisherAudio = () => {
    console.log('audio working');
    return {
        type: TOGGLE_PUB_AUDIO,
    };
};

export const togglePublisherVideo = () => {
    console.log('video working');

  return {
    type: TOGGLE_PUB_VIDEO,
  };
};

export const toggleSubscriberAudio = () => {
  return {
    type: TOGGLE_SUB_AUDIO,
  };
};

export const toggleSubscriberVideo = () => {
  return {
    type: TOGGLE_SUB_VIDEO,
  };
};