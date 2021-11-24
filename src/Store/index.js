import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers"
import thunk from "redux-thunk"
import { userData } from "../action";

const store= createStore(reducer,applyMiddleware(thunk))
store.dispatch(userData());
export default store;