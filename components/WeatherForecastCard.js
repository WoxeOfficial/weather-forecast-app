import React from 'react';
const getFormattedDate = (unix) =>{
    console.log(navigator.language)
    return new Date(unix * 1000).toLocaleDateString("en");
}
export default function WeatherForecastCard(props) {
    return(
        <div className="card">
            <img src={`/icons/${props.weather.weather[0].icon}.png`} alt=""/>
            <p className="weatherType">{Math.round(props.weather.main.temp - 272.15)}°C {props.weather.weather[0].main}</p>
            <p className="date">{getFormattedDate(props.weather.dt)}</p>
            <p className="cardWind">Wind: {props.weather.wind.deg} deg {props.weather.wind.speed} km/h</p>
            <p className="cardPressure">Pressure: {props.weather.main.pressure}</p>
        </div>
    )
}