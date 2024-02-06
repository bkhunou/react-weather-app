import "./Weather.css";
import React from "react";

import windy from "./windy.png";

export default function Weather() {
  return (
    <div className="weather">
      <div className="app-border">
        <div className="search-engine">
          <form>
            <input type="username" placeholder="Enter the city" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="weather-app">
          <div className="row">
            <div className="col-6">
              <span className="degree">30</span>
              <span className="tempUnits">
                <span className="active">°C </span> |<span href="#">°F</span>
              </span>
              <h3>Cape Town</h3>
              <p>Wednesday, 18:43</p>
            </div>
            <div className="col-6">
              <img className="icon" src={windy} alt="weather" />
              <h2>City</h2>
              <ul className="weather-info">
                <li>
                  Humidity: <span>69</span>%
                </li>
                <li>
                  Wind: <span>12</span>km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/bkhunou/vanilla-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        by Boipelo Khunou
      </small>
    </div>
  );
}
