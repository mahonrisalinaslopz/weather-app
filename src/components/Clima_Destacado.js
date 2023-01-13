import React from "react";
import CompassDirection from "./Brujula";

const Clima_Destacado = (props) => {
  return (
    <div className="hightlight_container">
      <div className="row1">
        <div className="one-box">
          <p>Wind Status</p>
          <div className="mph">
            {" "}
            {props.wind_speed}
            <span> mph</span>{" "}
          </div>
          <div className="windata">
            <div className="navegation">
              <span
                style={{ transform: "rotate(" + props.wind_direc + "deg)" }}
                className="material-icons-round"
              >
                navigation{" "}
              </span>
            </div>
            <div className="wind_direction">{CompassDirection(props.wind_direc)}</div>
          </div>
        </div>
        <div className="two-box">
          <p>Humidity</p>
          <div className="mph">
            {props.humid}
            <span>%</span>
          </div>
          <div className="percent-bar">
            <span>0</span> <span>50</span> 100
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: props.humid + "%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="percent-sign">
            <span>%</span>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="three-box">
          <p>Visibility</p>
          <div className="mph">
            {props.visib / 1000}
            <span> miles</span>
          </div>
        </div>
        <div className="four-box">
          <p>Air Pressure</p>
          <div className="mph">
            {props.air_pre} <span> mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clima_Destacado;
