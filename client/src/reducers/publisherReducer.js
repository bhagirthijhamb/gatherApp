import { ON_ERROR, TOGGLE_PUB_AUDIO, TOGGLE_PUB_VIDEO } from "../actions/types";

const initialState = {
  error: null,
  audio: true,
  video: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TOGGLE_PUB_AUDIO:
      return {
        ...state,
        audio: !state.audio,
      };
    case TOGGLE_PUB_VIDEO:
      return {
        ...state,
        video: !state.video,
      };
    default:
      return state;
  }
}
