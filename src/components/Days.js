import React from "react";

const Days = (props) => {
  return (
    <div className="day_weather">
      <p className="tomorrow">{props.day}</p>
      <div className="tomorrow_image">
        <img src={require("../images/LightCloud.png")} />
    </div>
      <p className="temp_maxmin">
        <span className="max_temp">
          {props.max_temp}°{props.unit}
        </span>{" "}
        <span className="min_temp">
          {props.min_temp}°{props.unit}
        </span>
      </p>
    </div>
  );
};

export default Days;
