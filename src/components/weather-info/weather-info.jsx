import React from 'react';
import PropTypes from 'prop-types';

const WeatherInfo = (props) => {
    const {city, temperature, description, urlIcon, country} = props;
    return (
        <div>
            <h3>{city} ({country}) - {temperature}°c</h3>
            <img src={urlIcon} alt={description} />
        </div>
    );
}

WeatherInfo.propTypes = {
    city: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    urlIcon: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default WeatherInfo;