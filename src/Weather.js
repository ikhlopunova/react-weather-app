import React, { useState } from "react";
import "./Weather.css";
import weathericon from "./images/weather.jpg";
import axios from "axios";

export default function Weather() {
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=5804e20be54f5001e6423f04ed96492c&units=metric`;
  axios.get(url).then(showWeather);

  if (loaded) {
    return (
      <div>
        <h1 className="city">{weather.city}</h1>
        <div className="row">
          <h2>
            <span className="temp">{Math.round(weather.temperature)}</span>
            <span className="unit">℃</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-5 offset-4">
            <ul className="date">
              <li>
                <strong>Last updated - Saturday, 15:25</strong>
              </li>
              <li id="conditions">{weather.description}</li>
              <li id="feels_like">
                feels like - {Math.round(weather.feels_like)}℃
              </li>
              <li id="humidity">humidity - {weather.humidity} %</li>
              <li id="wind">wind - {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-2">
            <img src={weather.icon} alt="weather" width="100px" id="icon" />
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
}
