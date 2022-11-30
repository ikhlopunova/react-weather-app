import React, { useState } from "react";
import "./Weather.css";
// import { Bars } from "react-loader-spinner";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);
  let [city, setCity] = useState(props.defaultCity);
  const [background, setBackground] = useState("");

  function changeBackground(weatherCondition) {
    if (weatherCondition === "01d" || weatherCondition === "01n") {
      setBackground("clear");
    }

    if (
      weatherCondition === "02d" ||
      weatherCondition === "02n" ||
      weatherCondition === "03d" ||
      weatherCondition === "03n" ||
      weatherCondition === "04d" ||
      weatherCondition === "04n"
    ) {
      setBackground("clouds");
    }

    if (
      weatherCondition === "09d" ||
      weatherCondition === "10d" ||
      weatherCondition === "09n" ||
      weatherCondition === "10n"
    ) {
      setBackground("rain");
    }

    if (weatherCondition === "11d" || weatherCondition === "11n") {
      setBackground("strom");
    }

    if (weatherCondition === "13d" || weatherCondition === "13n") {
      setBackground("snow");
    }

    if (weatherCondition === "50d" || weatherCondition === "50n") {
      setBackground("mist");
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
      <div>
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
