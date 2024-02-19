import React from "react";
import "./overview.css";

function Overview () {
    return(
        <div>
        <p className="overviow">
           <span className="days">{"Monday"}</span>'s Overview
        </p>
        <div className="two-box-up">
            <div className="one-box">
                <p className="text-boxs">High Temp</p>
                <img src={require("./Frame 8.png")} alt="weather" className="img-weather"/>
                <div className="temperature-box">{"14"}ºC</div>
            </div>
            <div className="two-box">
                <p className="text-boxs">Low Temp</p>
                <img src={require("./Frame 8 (1).png")} alt="weather" className="img-weather"/>
                <div className="temperature-box">{"3"}ºC</div>
            </div>
        </div>
        <div className="two-box-down">
           <div className="tree-box">
                <p className="text-boxs">Wind</p>
                <img src={require("./Frame 8 (2).png")} alt="weather" className="img-weather"/>
                <div className="temperature-box">{"3.6"} m/s</div>
           </div>
           <div className="four-box">
                <p className="text-boxs">Humidity</p>
                <img src={require("./Frame 8 (3).png")} alt="weather" className="img-weather"/>
                <div className="temperature-box">{"16"}%</div>
           </div>
        </div>
        </div>
    )
} 



export default Overview