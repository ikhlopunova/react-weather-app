import React, { useState } from "react";
import "./Weather.css";
// import { Bars } from "react-loader-spinner";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./BackgroundImages.css";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);
  let [city, setCity] = useState(props.defaultCity);
  const [background, setBackground] = useState("");

  function changeBackground(weatherCondition) {
    if (weatherCondition === "01d") {
      setBackground("day-clear");
    } else if (weatherCondition === "01n") {
      setBackground("night-clear");
    } else if (
      weatherCondition === "02d" ||
      weatherCondition === "03d" ||
      weatherCondition === "04d"
    ) {
      setBackground("day-clouds");
    } else if (
      weatherCondition === "02n" ||
      weatherCondition === "03n" ||
      weatherCondition === "04n"
    ) {
      setBackground("night-clouds");
    } else if (weatherCondition === "09d" || weatherCondition === "10d") {
      setBackground("day-rain");
    } else if (weatherCondition === "09n" || weatherCondition === "10n") {
      setBackground("night-rain");
    } else if (weatherCondition === "11d") {
      setBackground("day-storm");
    } else if (weatherCondition === "11n") {
      setBackground("night-storm");
    } else if (weatherCondition === "13d") {
      setBackground("day-snow");
    } else if (weatherCondition === "13n") {
      setBackground("night-snow");
    } else if (weatherCondition === "50d") {
      setBackground("day-mist");
    } else if (weatherCondition === "50n") {
      setBackground("night-mist");
    }
  }

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
    changeBackground(response.data.weather[0].icon);

    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5804e20be54f5001e6423f04ed96492c&units=metric`;
    axios.get(url).then(showWeather);
  }

  if (loaded) {
    return (
      <div className={background}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                onChange={handleChange}
                type="search"
                placeholder="Enter your city🔍"
                autoFocus="on"
                className="form-control w-100"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
