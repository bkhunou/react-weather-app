import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
