import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
