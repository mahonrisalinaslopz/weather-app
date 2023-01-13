import React from "react";

const Dias = (props) => {
  return (
    <div className="weather_day">
      <p className="tom">{props.day}</p>
      <div className="imagen_tom">
        <img src={require("../images/LightCloud.png")} />
    </div>
      <p className="max_min_temperature">
        <span className="temper_maxim">
          {props.max_temp}°{props.unit}
        </span>{" "}
        <span className="temper_minim">
          {props.min_temp}°{props.unit}
        </span>
      </p>
    </div>
  );
};

export default Dias;
