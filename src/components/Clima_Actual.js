import React from "react";
import "../App.css";
import "../index.css";

const dateToString = () => {
  var today = new Date();
  var weekday = today.toLocaleString("en-us", { weekday: "short" });
  var month = today.toLocaleString("en-us", { month: "short" });
  var day = today.getDate();
  var today_string = weekday + ", " + day + " " + month;

  return today_string;
};

const ClimaHoy = (props) => {
  return (
    <div className="today_weather">
      <div className="cont-one">
        <button onClick={props.searchclick} className="search_button">
          Seach for places
        </button>
        <button type="button" className="locat" onClick={props.Pos}>
          <span className="material-icons">my_location</span>
        </button>
      </div>

      <div className="cloud_background"></div>

      <div className="background">
        <div className="weather-imagen">
          <img alt="" src={require("../images/Clear.png")} />
        </div>
      </div>

      <div className="today_temp">
        {props.today_temp}
        <b>°{props.unit}</b>
      </div>

      <div className="weather_type">{props.weather_type}</div>

      <div className="today-date">
        <div className="today">Today</div>

        <div className="dot">.</div>

        <div className="today_date">{dateToString()}</div>
      </div>

      <div className="cont-two">
        <div className="location">
          <span className="material-icons">location_on</span>
        </div>
        <div className="location_text">{props.location}</div>
      </div>
    </div>
  );
};

export default ClimaHoy;
