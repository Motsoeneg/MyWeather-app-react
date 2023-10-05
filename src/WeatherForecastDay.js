import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weatherforecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={30} />
      <div className="Weatherforecast-temps">
        <span className="Weatherforecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°/
        </span>
        <span className="Weatherforecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
