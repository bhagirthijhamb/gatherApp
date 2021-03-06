import {
  GET_ROOM_NAME,
  GET_ROOM_URL,
  ROOM_LOADING,
  ON_ERROR,
  TOGGLE_PUB_AUDIO,
  TOGGLE_PUB_VIDEO,
  TOGGLE_SUB_AUDIO,
  TOGGLE_SUB_VIDEO,
  END_CALL
} from "./types";
import axios from 'axios';

export const getRoomDetails = (name) => (dispatch) => {
  dispatch(setRoomLoading());
  axios.get(`/room/${name}`)
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
    return {
        type: TOGGLE_PUB_AUDIO,
    };
};

export const togglePublisherVideo = () => {
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

export const endCall = () => {
  return {
    type: END_CALL,
  };
};