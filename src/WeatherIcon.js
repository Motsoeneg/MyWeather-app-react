import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "shower-rain-day": "CLOUDY",
    "shower-rain-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SLEET",
    "snow-night": "SLEET",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="rgb(117, 113, 113)"
      size={props.size}
      animate={true}
    />
  );
}
