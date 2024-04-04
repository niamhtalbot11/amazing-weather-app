import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){

    const [weatherData, setWeatherData] = useState({ready :false});
    const [ city, setCity] = useState (props.defaultCity);

    function handleResponse (response){
    setWeatherData ({
    ready:true,
    coordinates : response.data.coord,
    temperature : response.data.main.temp,
    humidity : response.data.main.humidity,
    date : new Date(response.data.dt * 1000),
    description : response.data.weather[0].description,
    wind : Math.round(response.data.wind.speed),
    city : response.data.name,
     icon: response.data.weather[0].icon,
});
    }
    function search (){
      const apiKey ="29d1bf7ff9e07cdab460b43caa4c25ca";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
  }

function handleSubmit(event){
    event.preventDefault();
    search(city);
}

function handleCityChange(event) {
    setCity(event.target.value);
  }



if (weatherData.ready){
return (
    <div className="Weather">
      
   <form onSubmit={handleSubmit}>
    
   <div className="searchEngine pt-3">
   <div className="row">
   <div className="col-2"></div>
   <input type="search" className="form-control col-6" id="searchEngine" placeholder="Enter a city" onChange={handleCityChange}/>
   <input type="submit"  className="col-2" value="Search" id="searchButton" />
   <div className="col-2"></div>
   </div>
   </div>
  </form>
  
  <WeatherInfo data={weatherData} />
  <WeatherForecast coordinates={weatherData.coordinates} />
  
  </div>
)
 }
 else {
    search();
    return "Loading...";
    
  }
  

}