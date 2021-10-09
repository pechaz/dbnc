import {Api} from "../../util/api";

export const CITY_LIST = 'CITY_LIST';
export const CLEAR_CITY_LIST = 'CLEAR_CITY_LIST';
export const CITY_WEATHER = 'CITY_WEATHER';

export const searchCity = (cityName, onResponse) => async (dispatch) => {
    const response = await Api.get(
        'https://www.metaweather.com/api/location/search/?query=' + cityName
    );

    dispatch({
        type: CITY_LIST,
        payload: {
            response: response.data,
        }
    })

    if (onResponse) {
        onResponse(response.data);
    }
}


export const getWeather = (cityCode, onResponse) => async (dispatch) => {
    const response = await Api.get(
        'https://www.metaweather.com/api/location/'+cityCode+'/'
    );

    dispatch({
        type: CITY_WEATHER,
        payload: {
            response: response.data,
        }
    })

    if (onResponse) {
        onResponse(response.data);
    }
}

export const clear = () => ({
    type: CLEAR_CITY_LIST,
})
