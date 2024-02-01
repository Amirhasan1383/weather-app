import React from "react";
import "./Next5Day.css"





function Next5Day () {
    
    return (
        <>
          <p className="text-up">Next 5 Days</p>
          <div className="colemns">
             <div className="colemn-1">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{"14°"}</div>
                </div>
             </div>

             <div className="colemn-2">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{"14°"}</div>
                </div>
             </div>

             <div className="colemn-3">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{"14°"}</div>
                </div>
             </div>

             <div className="colemn-4">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{"14°"}</div>
                </div>
             </div>

             <div className="colemn-5">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{"14°"}</div>
                </div>
             </div>







          </div>
        </>
    );
}


export default Next5Day; 