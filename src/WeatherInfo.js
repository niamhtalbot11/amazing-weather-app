import React from 'react';
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.css";



export default function WeatherInfo(props){
return(
    <div className="WeatherInfo">
        <h1 className="city">{props.data.city}</h1>
        <FormatDate className="date" date={props.data.date}/>
        <span className="description text-capitalize">{props.data.description}</span>
        <div class="row">
            <div className="col-4">
        <WeatherTemperature  id="temperature" celsius={props.data.temperature} />
        <div>
        <WeatherIcon code={props.data.icon} size={52}/>
        </div>
        </div>
            <div className="col-4">
                <ul>
            <li><div className="humidity"> Humidity: {props.data.humidity}%</div></li>
            <li><div className="windSpeed">Wind: {props.data.wind} km/h</div></li>
            </ul>
            </div>
            </div>
            </div>
    
);
}