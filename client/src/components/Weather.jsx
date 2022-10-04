import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Weather = ({currentCity}) => {
    const [cityWeather, setCityWeather] = useState();

    const fetchWeather = async () => {
        const response = await axios.get(`/meteo/${currentCity}`);
        setCityWeather(response.data);
    }
    useEffect(() => {
        if (currentCity) {
            fetchWeather();
        }
    }, [currentCity])

    if (!cityWeather || !cityWeather.length) return (
        <div className="text-center">Aucune donnée à afficher</div>
    );

    return (
        <div className='d-flex justify-content-between flex-wrap'>
            {cityWeather.map(item =>
                <WeatherCard key={item.id} weatherData={item}/>
            )} 
        </div>
    )
}

export default Weather