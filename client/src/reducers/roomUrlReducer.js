import { GET_ROOM_URL, END_CALL } from "../actions/types";

const initialState = {
  roomDetails: {},
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOM_URL:
      return {
        ...state,
        roomDetails: action.payload,
        loading: false,
      };
    case END_CALL:
      return {
        ...state,
        roomDetails: {}
      };
    default:
      return state;
  }
}
