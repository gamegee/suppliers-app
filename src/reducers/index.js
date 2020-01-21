import { combineReducers } from "redux";
import {reducer as notifications} from 'react-notification-system-redux';


import config from "./config";
import suppliers from "./suppliers";

const rootReducer = combineReducers({
  config,
  suppliers,
  notifications
});

export default rootReducer;
