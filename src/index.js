import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather defaultCity="Cape Town" />
    <div className="footer">
      <span>
        <a
          href="https://github.com/bkhunou/react-weather-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        {""} coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/85348-boipelo-khunou"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boipelo Khunou
        </a>
      </span>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
