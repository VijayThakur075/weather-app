import { SHOW_MODEL } from "../action";

const intialState = {
    show: false

}

const modelShow = (state = intialState, action) => {
    switch (action.type) {
        case SHOW_MODEL:
            return {
                ...state,
                show: action.payload,
            };
        default:
            return state;
    }
}
export default modelShow;