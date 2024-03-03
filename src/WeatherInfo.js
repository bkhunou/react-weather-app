import React from "react";
import FormattedDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="weather-app">
        <div className="row">
          <div className="col-6">
            <span className="degree">{Math.round(props.data.temperature)}</span>
            <span className="tempUnits">
              <span className="active">°C </span>
            </span>

            <h3>{props.data.city}</h3>
            <div>
              <FormattedDate date={props.data.date} />
            </div>
          </div>
          <div className="col-6">
            <ul className="weather-info">
              <WeatherIcon />
              <li>
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.speed}</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
