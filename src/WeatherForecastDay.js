import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="day">
        <strong>{props[0].data.dt}</strong>
      </div>
      <WeatherIcon code={props[0].weather[0].icon} size={50} />
      <div className="temp-forecast">
        <strong>{Math.round(props[0].temp.max)}°</strong> /{" "}
        {Math.round(props[0].temp.min)}°
      </div>
    </div>
  );
}
