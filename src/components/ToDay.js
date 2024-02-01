import React from "react";
import "./ToDay.css"
function ToDay () {
    return(
        <>
         <p className="today">today</p>
         <div className="today-box_up">
           <p className=" day">{"Friday"}</p>
            <p className="data">{"11:45 AM"}</p>
         </div>
         <div className="today-box_down">
          <div className="img-temperature">
          <div className="temperature">{"16°"}</div>
            <img src={require("./image1.png")}  alt="icon temperature" className="image_today-box"/>
          </div>

            <div className="texts_box-down">
                <div className="two-text-first">
                    <div className="one-text">Feelslike<div className="amounts">{"18°"}</div></div>
                    <div className="two-text">Pressure<div className="amounts">{"100MB"}</div></div>
                </div>
                <div className="two-text-cn"> 
                    <div className="three-text">Sunrise <div className="amounts">{"05:30"}</div></div>
                    <div className="four-text">Sunset<div className="amounts">{"18:45"}</div></div>
                </div>
            </div>
         </div>
        
        </>
    );
}

export default ToDay;