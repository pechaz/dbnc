import {CITY_LIST, CITY_WEATHER, CLEAR_CITY_LIST, CLEAR_CITY_WEATHER} from "../actions/mainAction";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CITY_LIST:
            return {
                ...state,
                cityListResponse: action.payload.response,
            };
        case CLEAR_CITY_LIST:
            return {
                ...state,
                cityListResponse: null,
            };
        case CITY_WEATHER:
            return {
                ...state,
                cityWeatherResponse: action.payload.response,
            };
        case CLEAR_CITY_WEATHER:
            return {
                ...state,
                cityWeatherResponse: null,
            };
        default:
            return state;
    }
}
