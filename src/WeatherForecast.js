import React, {useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false)
      }, [props.coordinates])


function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded){
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 5){
                        return(
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                                </div>
                        );
                    } 
                })}
            </div>
        </div>
    );
} else {
    let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}