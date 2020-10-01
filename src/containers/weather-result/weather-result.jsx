import React from 'react';
import { connect } from 'react-redux';
import LoadScreen from '../../components/load-screen/load-screen';
import ErrorScreen from '../../components/error-screen/error-screen';
import WeatherInfo from '../../components/weather-info/weather-info';
import { cleanupRequest } from '../../store/actions/request-action';
import { addWeather } from '../../store/actions/weathers-action';


const WeatherResult = (props) => {
    const {weather, onLoading, error, cleanupRequest, addWeather} = props;
    
    return (
        <div>
            {onLoading ? (
                <LoadScreen />
            ) : (error) ? (
                <ErrorScreen />
            ) : (weather) ? (
                <>
                    <WeatherInfo {...weather} />
                    <button onClick={() => addWeather(weather)}>Sauvegarder</button>
                    <button onClick={cleanupRequest}>Effacer</button>
                </>
            ) : (
                <h3>No data</h3>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    onLoading: state.request.onLoading,
    weather: state.request.weather,
    error: state.request.error
});

const mapDispatchToProps = {
    cleanupRequest,
    addWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherResult);