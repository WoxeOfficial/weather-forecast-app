import React from 'react';
import WeatherForecastCard from "./WeatherForecastCard";

export default function CardGroup(props) {
    return (
        <div className="cardGroup">
            {
                props.city.days.slice(1,5).map((weather, index) => (
                    <WeatherForecastCard key={index} weather={weather}/>
                ))
            }
        </div>
    )
}