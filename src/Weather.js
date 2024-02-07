import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temperature.day,
      speed: response.data.wind.speed,
      date: "Wednesday, 18:43",
      humidity: response.data.temeperature.humidity,
      city: response.data.city,
      description: response.data.daily.condition.description,
      icon: response.data.daily.condition.icon,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="app-border">
            <div className="search-engine">
              <form>
                <input
                  type="username"
                  placeholder="Enter the city"
                  autoFocus="on"
                />
                <input type="submit" value="Search" className="searchButton" />
              </form>
            </div>
            <div className="weather-app">
              <div className="row">
                <div className="col-6">
                  <span className="degree">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="tempUnits">
                    <span className="active">°C </span> |
                    <span href="#">°F</span>
                  </span>
                  <h3>{weatherData.city}</h3>
                  <p>{weatherData.date}</p>
                </div>
                <div className="col-6">
                  <ul className="weather-info">
                    <img
                      className="icon"
                      src={weatherData.iconUrl}
                      alt={weatherData.icon}
                    />
                    <span className="text-capitalize">
                      {weatherData.description}
                    </span>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.speed}</span>km/h
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
