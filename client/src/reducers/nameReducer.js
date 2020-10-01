import { GET_ROOM_NAME } from "../actions/types";

const initialState = {
  name: ''
};

export default function (state = initialState, action) {
    // console.log('nameReducer', action)
  switch (action.type) {
    case GET_ROOM_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
