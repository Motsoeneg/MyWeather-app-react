import WeatherIcon from "./WeatherIcon";
import "./Weatherforecast";

export default function Weatherforecast() {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=2e190051baofeb04db4bce4a3b4t041f&units=metric`;
  return (
    <div className="Weatherforecast">
      <div className="row">
        <div className="col">
          <div className="Weatherforecast-day">Thurs</div>
          <WeatherIcon code="clear-sky-day" size="36" />
          <div className="Weatherforecast-temps">
            <span className="Weatherforecast-temp-max">30°/</span>
            <span className="Weatherforecast-temp-min">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
