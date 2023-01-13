import React from "react";
import "../App.css";
import ClimaDiario from "./Pronostico";
import Destacados from "./Clima_Destacado";

const ClimaDestacado = (props) => {
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
      <ClimaDiario
        daily_data={props.daily_data}
        unit={props.unit}
        ForeTemp={props.ForeTemp}
        ForeDate={props.ForeDate}
        ForeIcon={props.ForeIcon}
      />
      <p className="today_hightlight">Today's Hightlights</p>
      <Destacados
        wind_direc={props.wind_direc}
        wind_speed={props.wind_speed}
        air_pre={props.air_pre}
        visib={props.visib}
        humid={props.humid}
      />
      <p className="footer">By Maho</p>
    </div>
  );
};

export default ClimaDestacado;
