import "./Search.css";
import React from "react";

export default function Search() {
  return (
    <div className="input-group">
      <div className="form-outline">
        <form className="city-form">
          <input type="search" id="form1" placeholder="Enter your city🔍" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <button id="button">Current location</button>
      </div>
    </div>
  );
}
