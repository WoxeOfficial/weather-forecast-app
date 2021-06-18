import React, {useEffect} from 'react';

export default function Today(props) {
    const getFormattedDate = (unix) =>{
        console.log(navigator.language)
        return new Date(unix * 1000).toLocaleDateString("en");
    }
    useEffect(() => {

    }, [])
    return(
        <div className="today">
            <div className="cityInfoWrapper">
                <img src={"icons/" + props.city.days[0].weather[0].icon + ".png"} alt=""/>
                <div className="cityInfo">
                    <div>
                        <p className="cityName">{props.city.cityName}</p>
                        <p className="todayForecast">{Math.round(props.city.days[0].main.temp - 272.15)}°C {props.city.days[0].weather[0].main}</p>
                        <p className="date">{getFormattedDate(props.city.days[0].dt)}</p>
                    </div>
                    <div className="weatherDetailsWrapper">
                        <div className="weatherDetails">
                            <p className="wind">Wind: {props.city.days[0].wind.deg} deg {props.city.days[0].wind.speed} km/h</p>
                            <p className="pressure">Pressure: {props.city.days[0].main.pressure}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}