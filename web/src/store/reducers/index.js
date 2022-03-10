import { combineReducers } from "redux";

import accounts from "./accounts";
import common from "./common";

const rootReducer = combineReducers({
  accounts,
  common,
});

export default rootReducer;
