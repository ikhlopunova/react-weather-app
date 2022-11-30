import React from "react";
import ActualDate from "./ActualDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="city">{props.data.city}</h1>
      <div className="row">
        <Temperature celcius={props.data.temperature} />
      </div>
      <div className="row">
        <div className="col-5 offset-4">
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
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      ;
    </div>
  );
}