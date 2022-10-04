import React from 'react'

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="w-50 my-1 px-1">
            <div className="card text-center">
                <div className="card-header">
                    {new Date(weatherData.date).toLocaleString('FR-fr', {
                        // weekday: 'long',
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                    })}
                </div>
                <div className="text-danger">{weatherData.weatherIcon}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">{weatherData.details.probafog} %</div>
                    </div>
                    <div className="row">
                        <div className="col">Min<br />{weatherData.details.tmin} °C</div>
                        <div className="col">Max<br />{weatherData.details.tmax} °C</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard