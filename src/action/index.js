import user from "../Api/user.js";

export const SHOW_MODEL="SHOW_MODEL";
export const USER_DATA="USER_DATA";

export const showModel = (payload) =>({type: SHOW_MODEL,payload})
export const showUser = (userdata) =>({type: USER_DATA,userdata})
    
export const userData=()=>(dispatch) =>{
    user.getUsers(userdata=>{
        dispatch(showUser(userdata));
    })
} 