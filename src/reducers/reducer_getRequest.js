import {GET_REQUEST} from "../actions";

export default function (state= [], action){
    switch (action.type){
        case GET_REQUEST:
            return [action.payload.data, ...state];

    }
    console.log('Action recieved', action);
    return state;
}