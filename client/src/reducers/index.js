import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import roomUrlReducer from "./roomUrlReducer";
import publisherReducer from './publisherReducer';
import subscriberReducer from './subscriberReducer';

export default combineReducers({
  name: nameReducer,
  roomDetails: roomUrlReducer,
  publisher: publisherReducer,
  subscriber: subscriberReducer
});
