import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import requestReducer from './reducers/request-reducer';
import weatherReducer from './reducers/weathers-reducer';


const reducer = combineReducers({
    request: requestReducer,
    weather: weatherReducer
});



export default createStore(reducer, applyMiddleware(thunkMiddleware));