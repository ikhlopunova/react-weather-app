import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div>
      <h1 className="city">Cairo</h1>
      <h2>
        <span className="temp">28℃</span>
      </h2>
      <div className="row">
        <div className="col-5 offset-4">
          <ul className="date">
            <li>
              <strong>Last updated - Saturday, 15:25</strong>
            </li>
            <li id="conditions">weather conditions - sunny </li>
            <li id="feels_like">feels like - 26℃</li>
            <li id="humidity">humidity - 40%</li>
            <li id="wind">wind - 2km/h</li>
          </ul>
        </div>
        <div className="col-2">
          <img
            src={`images/weather.jpg`}
            alt="weather"
            width="180px"
            id="icon"
          />
        </div>
      </div>
    </div>
  );
}
