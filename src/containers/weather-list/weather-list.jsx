import React from 'react';
import { connect } from 'react-redux';
import WeatherInfo from '../../components/weather-info/weather-info';
import { removeWeather } from '../../store/actions/weathers-action';


const WeatherList = (props) => {
    const {weatherList, removeWeather} = props;

    const weatherItems = weatherList.map(
        weather => <li key={weather.id}>
            <WeatherInfo {...weather}/>
            <button onClick={() => removeWeather(weather.id)}>X</button>
        </li>
    );

    return (
        <div>
            <h2>Liste des météos</h2>
            <ul>{weatherItems}</ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    weatherList : state.weather.data
})

const mapDispatchToProps = {
    removeWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);