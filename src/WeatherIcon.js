import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-sky-day",
    "01n": "clear-sky-night",
    "02d": "few-clouds-day",
    "02n": "few-clouds-night",
    "03d": "scattered-clouds-day",
    "03n": "scattered-clouds-night",
    "04d": "broken-clouds-day",
    "04n": "broken-clouds-night",
    "05d": "shower-rain-day",
    "05n": "shower-rain-night",
    "06d": "rain-day",
    "06n": "rain-night",
    "07d": "thunderstorm-day",
    "07n": "thunderstorm-night",
    "08d": "snow-day",
    "08n": "snow-night",
    "09d": "mist-day",
    "09n": "mist-night",
  };

  return <div>icon={codeMapping[props.code]}</div>;
}
