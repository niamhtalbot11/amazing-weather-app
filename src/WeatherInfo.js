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
        <div className="row mb-5">
        <div className="col-6">
          <div className="clearfix d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={130} />
            </div>
            <div className="float-left ">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
            <div className="col-6">
                <ul>
            <li><span className="humidity"> Humidity: {props.data.humidity}%</span></li>
            <li><span className="windSpeed">Wind: {props.data.wind} km/h</span></li>
            </ul>
            </div>
            </div>
            </div>
    
);
}