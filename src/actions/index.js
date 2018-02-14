import axios from 'axios';

const API_KEY = 'ff521e7243aa7bc4cc74140fc6a25fda';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const GET_REQUEST = 'GET_REQUEST';
export function getRequest(){
    console.log('inaction');
    const url = `${ROOT_URL}&q=london,us`;
    const request = axios.get(url);
    console.log('REQUEST:', request);
    return {
        type: GET_REQUEST,
        payload: request
    };
}



