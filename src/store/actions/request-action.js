import axios from "axios";

export const REQUEST_CLEANUP = 'REQUEST_CLEANUP';
export const IS_LOADING = 'IS_LOADING';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_ERROR = 'FETCH_ERROR';

const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=__city__&appid=7dd2a0dabe181f6c9336b69f11ff86a2&units=metric&lang=fr"
const IMG_WEATHER = 'http://openweathermap.org/img/wn/__icon__@2x.png';


export const onLoad = () => ({
    type: IS_LOADING
});

export const cleanupRequest = () => ({
    type: REQUEST_CLEANUP
});

export const fetchWeather = (weather) => ({
    type: FETCH_WEATHER,
    payload: weather
});

export const fetchError = () => ({
    type: FETCH_ERROR
});

export const getWeather = (city) => {
    const url = WEATHER_URL.replace('__city__', city);

    return (dispatch) => {
        dispatch(onLoad());

        axios.get(url)
        .then(({data}) => {

            const weather = {
                id: data.id,
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                urlIcon: IMG_WEATHER.replace('__icon__',data.weather[0].icon),
                country: data.sys.country
            }

            setTimeout(() => {
                dispatch(fetchWeather(weather));
            }, 500);
        }).catch(e => {
            dispatch(fetchError());
        })
    };
}