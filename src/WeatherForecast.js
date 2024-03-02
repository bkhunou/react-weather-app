import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu </div>
          <WeatherIcon code="01d" />
          <div className="Forecast-temperatures">
            <span className="temperature-max">19°</span> |{" "}
            <span className="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
