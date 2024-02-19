import React from "react";
import "./Next5Day.css"
import Colemns from "./colemns";





function Next5Day () {
    
    return (
        <div >
          <p className="text-up">Next 5 Days</p>
          <div className="colemns">
             <div className="colemn-1">
             <Colemns/>
             </div>
             <div className="colemn colemn-2">
             <Colemns/>
             </div>
             <div className="colemn colemn-3">
             <Colemns/>
             </div>
             <div className="colemn colemn-4">
             <Colemns/>
             </div>
             <div className="colemn colemn-5">
             <Colemns/>
             </div>
          </div>
        </div>
    );
}


export default Next5Day; 