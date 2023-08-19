import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ProjectReducer from "./project";

const rootReducer = combineReducers({
     auth: AuthReducer,
     projects: ProjectReducer
});
export default rootReducer;