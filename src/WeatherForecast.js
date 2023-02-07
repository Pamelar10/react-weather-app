import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import  axios  from "axios";

export default function WeatherForecast() {
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let longitude = 40.7;
    let latitude = 74;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon${longitude}&appid=${apiKey}`;
   
   axios.get(apiUrl).then(handleResponse);
   
   
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu 
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°
              </span>
              <span className="WeatherForecast-temperature-min">10°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
   
   );


}