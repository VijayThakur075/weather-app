import { combineReducers } from "redux";
import modelShow from "./model";
import userDetail from "./getUser";

const reducer=combineReducers({
    modelShow,
    userDetail,
})
export default reducer;