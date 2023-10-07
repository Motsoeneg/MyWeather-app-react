import { useEffect, useState } from "react";
import "./Weatherforecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Weatherforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.cords]);

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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.cords.longitude;
    let latidute = props.cords.latitude;
    let apiUrl = `
https://api.shecodes.io/weather/v1/forecast?lat=${latidute}&lon=${longitude}&key=fbef01f4et1b02o0d25c27210a43ef3f&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
