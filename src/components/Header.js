import React , { useState } from "react";
import { ReactDOM } from "react-dom";
import "./Header.css";



   






function Header() {
 const [isCelsius, setIsCelsius] = useState(true);
 const handleToggle = () => {
        setIsCelsius(!isCelsius);}

    

  return (
    <div className="all-Header">
      <img src={require("./pinoutline.png")} className="icon-location" alt="icon location" />


      <p className="city-contry_name">{'tehran'}-{'iran'}</p>


      <form role="search" id="form">
        <button>
          <svg id="img-search" viewBox="0 0 1024 1024">
            <path
              className="path1"
              d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
            ></path>
          </svg>
        </button>
        <input type="search" id="query" name="q" placeholder="Search city" />
      </form>




      <label className="temperature-toggle">
        <input type="checkbox" checked={isCelsius} onChange={handleToggle} />
        <span className={`slider ${isCelsius ? 'celsius' : 'fahrenheit'}`}></span>
      </label>


    </div>
  );
}

export default Header;
