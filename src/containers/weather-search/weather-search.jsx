import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../store/actions/request-action';

const WeatherSearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getWeather(city);
        setCity('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" 
                    value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="submit" value="Rechercher"/>
        </form>
    );
}

const mapDispatchToProps = {
    getWeather
}

export default connect(null, mapDispatchToProps)(WeatherSearch);