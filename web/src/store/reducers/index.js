import { combineReducers } from "redux";

import auth from "./auth";
import common from "./common";
import quiz from "./quiz";

const rootReducer = combineReducers({
  auth,
  common,
  quiz,
});

export default rootReducer;
