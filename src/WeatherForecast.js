import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function showWeather(response) {
    console.log(response.data);
  }

  let apiKey = `8944afa6845bd7c413a687258d3211ef`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">
            <strong>Thu</strong>
          </div>
          <WeatherIcon code="01d" size={50} />
          <div className="temp-forecast">
            <strong>18°</strong> / 25°
          </div>
        </div>
      </div>
    </div>
  );
}
