import React from "react";
import "../App.css";
import WeatherComing from "./Days/Forecast_Weather";
import TodaysHighlights from "./Today/Today_Hightlight";

const Hightlights = (props) => {
  return (
    <div className="container_weather">
      <div className="temp_button">
        {props.unit === "F" ? (
          <div className="fahrenheit_button" id="convert-active">
            <h4>°F</h4>
          </div>
        ) : (
          <div onClick={props.onclick} className="fahrenheit_button">
            <h4>°F</h4>
          </div>
        )}
        {props.unit === "C" ? (
          <div className="celcius_button" id="convert-active">
            <h4>°C</h4>
          </div>
        ) : (
          <div onClick={props.onclick} className="celcius_button">
            <h4>°C</h4>
          </div>
        )}
      </div>
      <WeatherComing
        daily_data={props.daily_data}
        unit={props.unit}
        ForeTemp={props.ForeTemp}
        ForeIcon={props.ForeIcon}
        ForeDate={props.ForeDate}
      />

      <p className="today_hightlight">Today's Hightlights</p>
      <TodaysHighlights
        wind_speed={props.wind_speed}
        wind_direc={props.wind_direc}
        humid={props.humid}
        visib={props.visib}
        air_pre={props.air_pre}
      />
    </div>
  );
};

export default Hightlights;
