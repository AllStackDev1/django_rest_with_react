import { combineReducers } from "redux";

import auth from "./auth/reducer";
import alert from "./alert/reducer";
import leads from "./leads/reducer";

export default combineReducers({
  auth,
  alert,
  leads,
});
