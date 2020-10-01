export const ADD_WEATHER = 'ADD_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';


export const addWeather = (weather) => ({
    type: ADD_WEATHER,
    payload: weather
});

export const removeWeather = (id) => ({
    type: REMOVE_WEATHER,
    payload: id
});