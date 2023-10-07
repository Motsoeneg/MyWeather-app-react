import DateFormat from "./DateFormat";
import WeatherUnits from "./WeatherUnits";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>{" "}
      <WeatherIcon code={props.data.icon} size="60" />{" "}
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <DateFormat date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="temperature">
            <WeatherUnits celsius={props.data.temperature} />
          </div>{" "}
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
