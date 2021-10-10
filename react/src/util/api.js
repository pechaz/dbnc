import Axios from 'axios';

export const Api = Axios.create({
    headers: {'Access-Control-Allow-Origin': '*'}
})
