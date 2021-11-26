import { USER_DATA } from "../action";

const intialState = {
    result: []
}

const userDetail = (state = intialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                result: action.userdata,
            };


        default:
            return state;
    }
    
}
export default userDetail;