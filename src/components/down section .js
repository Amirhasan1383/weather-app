import React from "react";
import Overview from "./overview";
import Imgbottonsection from "./imgbottonsection";

function Downsection() {
  return (
    <div style={{ display: "flex" }}>

      <div style={{ flex: 1 }}>
        <Overview />
      </div>
      <div style={{ flex: 1 }}>
        <Imgbottonsection />
      </div>
    </div>
  );
}

export default Downsection;
 {/* <div>
        <RecentCities />
      </div> */}