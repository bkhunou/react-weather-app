import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day(response) {
    let date = new Date(response.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.weather[0].icon} />
      <div className="Forecast-temperatures">
        <span className="temperature-max">{maxTemperature()}°</span> |{" "}
        <span className="temperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
