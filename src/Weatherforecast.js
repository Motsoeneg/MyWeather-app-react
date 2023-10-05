import { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weatherforecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Weatherforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weatherforecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.cords.longitude;
    let latidute = props.cords.latitude;
    let apiUrl = `
https://api.shecodes.io/weather/v1/forecast?lat=${latidute}&lon=${longitude}&key=2e190051baofeb04db4bce4a3b4t041f&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
