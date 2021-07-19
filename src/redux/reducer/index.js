import { combineReducers } from "redux";
import authReducer from "./authReducer";
import routeReducer from "./routeReducer";

export default combineReducers({
    auth: authReducer,
    route: routeReducer
});
