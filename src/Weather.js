import React, { useState } from "react";
import Weatherforecast from "./Weatherforecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data.coordinates);
    setWeatherData({
      loaded: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      cords: response.data.coordinates,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "2e190051baofeb04db4bce4a3b4t041f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Weatherforecast cords={weatherData.cords} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
