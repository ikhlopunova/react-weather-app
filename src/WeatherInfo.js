import React, { useState } from "react";
import ActualDate from "./ActualDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  // eslint-disable-next-line
  const [background, setBackground] = useState("");

  return (
    <div className={`app ${background}`}>
      <h1 className="city">{props.data.city}</h1>
      <div className="row">
        <Temperature celcius={props.data.temperature} />
      </div>
      <div className="row weather-info">
        <div className="col-md-5 offset-4">
          <ul>
            <li>
              <strong>
                <ActualDate date={props.data.date} />
              </strong>
            </li>
            <li id="conditions">{props.data.description}</li>
            <li id="feels_like">
              feels like - {Math.round(props.data.feels_like)}℃
            </li>
            <li id="humidity">humidity - {props.data.humidity} %</li>
            <li id="wind">wind - {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-md-2 icon">
          <WeatherIcon code={props.data.icon} size={140} />
        </div>
      </div>
    </div>
  );
}
