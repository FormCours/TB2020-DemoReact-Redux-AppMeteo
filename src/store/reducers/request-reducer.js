import {IS_LOADING, FETCH_WEATHER, FETCH_ERROR, REQUEST_CLEANUP} from './../actions/request-action';

const initialState = {
    onLoading: false,
    weather: null,
    error: null
}

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                onLoading: true
            };
        case REQUEST_CLEANUP: 
            return {
                weather: null,
                onLoading: false,
                error: false
            }
        case FETCH_WEATHER:
            return {
                onLoading: false,
                weather: action.payload,
                error: false
            };
        case FETCH_ERROR:
            return{
                onLoading: false,
                weather: null,
                error: true
            };
        default:
            return state;
    }
}

export default requestReducer;