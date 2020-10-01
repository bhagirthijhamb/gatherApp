import { GET_ROOM_URL } from "../actions/types";

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
    default:
      return state;
  }
}
