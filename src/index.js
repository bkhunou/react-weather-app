import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);

function WeatherApp() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <small>
          <a
            href="https://github.com/bkhunou/vanilla-weather-app"
            target="_blank"
          >
            Open-source code
          </a>
          by Boipelo Khunou
        </small>
      </div>
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
