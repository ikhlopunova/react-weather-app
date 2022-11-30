import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <h2>
          <span className="temp">{Math.round(props.celcius)}</span>
          <span className="unit">
            °C|
            <a href="/" onClick={showFahrenheit} className="fahrenheit">
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <h2>
          <span className="temp">{Math.round(fahrenheit)}</span>
          <span className="unit">
            <a href="/" onClick={showCelcius} className="celcius">
              °C
            </a>
            |°F
          </span>
        </h2>
      </div>
    );
  }
}
