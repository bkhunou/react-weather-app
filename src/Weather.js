import "./Weather.css";
import React from "react";
import axios from "axios";

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
              <a className="degree">30</a>
              <span className="tempUnits">
                <span href="#" className="active">
                  °C{" "}
                </span>{" "}
                |<span href="#">°F</span>
              </span>
              <h3>Cape Town</h3>
              <p>Wednesday, 18:43</p>
            </div>
            <div className="col-6">
              <img className="icon" src={windy} />
              <h2></h2>
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
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
