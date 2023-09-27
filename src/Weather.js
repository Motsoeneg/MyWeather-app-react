import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Durban</h1>
      <ul>
        <li>Wednesday </li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <h2>☀️ 6°C</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity: 72%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
