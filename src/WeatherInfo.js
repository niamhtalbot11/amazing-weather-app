import React from 'react';

import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.css";
// import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
return(
    <div className="WeatherInfo">
        <h1 className="city">{props.data.city}</h1>
        <FormatDate className="date" date={props.data.date}/>
        <span className="description text-capitalize">{props.data.description}</span>
        <div class="row">
            <div className="col-6">
        <WeatherTemperature  id="temperature" celsius={props.data.temperature} />
        {/* <WeatherIcon  code={props.data.iconUrl}  /> */}
        </div>
            <div className="col-6">
                <ul>
            <li><div className="humidity"> Humidity: {props.data.humidity}%</div></li>
            <li><div className="windSpeed">Wind: {props.data.wind} km/h</div></li>
            </ul>
            </div>
            </div>
            </div>
    
);
}