import "./Search.css";
import React from "react";

export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-3">
          <input
            onChange
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
  );
}
