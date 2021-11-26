import { combineReducers } from "redux";
import modelShow from "./model";
import userDetail from "./getUser";
//import setUsers from "./settingUserData";
import weatherApi from "./weather";

const reducer = combineReducers({
    modelShow,
    userDetail,
    //setUsers,
    weatherApi,
})
export default reducer;