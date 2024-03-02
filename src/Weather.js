import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      speed: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="app-border">
            <div className="search-engine">
              <form onSubmit={handleSubmit}>
                <input
                  type="username"
                  placeholder="Enter the city"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" className="searchButton" />
              </form>
            </div>
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
