import user from "../Api/user.js";

export const SHOW_MODEL="SHOW_MODEL";
export const USER_DATA="USER_DATA";
//export const SET_USER="SET_USER";
export const GET_WEATHER="GET_WEATHER"
export const GET_CITY="GET_CITY"

export const showModel = (payload) =>({type: SHOW_MODEL,payload})
export const showUser = (userdata) =>({type: USER_DATA,userdata})
//export const setUser=(payload) =>({type: SET_USER, payload})
export const getWeather = (weather) => ({type: GET_WEATHER, weather})
export const getCity = (payload) => ({type: GET_CITY, payload})
  


export const userData=()=>(dispatch) =>{
    user.getUsers(userdata=>{
        dispatch(showUser(userdata));
    })
} 