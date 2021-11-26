import { GET_WEATHER, GET_CITY } from "../action"

const intialState = {
    api: [],
    city: "",
}

const weatherApi = (state = intialState, action) => {
   
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                api: action.weather,
            }
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;

    }
}

export default weatherApi;