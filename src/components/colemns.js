import React from "react";
import "./colemns.css"
// import { useContext } from "react";
// import { citysContext } from "../App";
// import { useState, useEffect } from "react";
// import axios from "axios";


function Colemns () {
    // const {city} = useContext (citysContext)
    // const [weatherData, setWeatherData] = useState("");

    // useEffect(() => {  
    //     const fetchData = async () => { 
    //         console.log('Query before API call:', city);
    //         try {
    //             const response = await axios.get(
    //                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=315b8f1161317ad5af4cb4bb673143d8`
    //             );
    //             console.log(response.data);
    //             setWeatherData(response.data);
    //         } catch (error) {
    //           if (error.response) {
    //             // اگر پاسخی از سمت سرور دریافت کرده باشیم
    //             console.error('Error response:', error.response.data);
    //             console.error('Status code:', error.response.status);
    //             console.error('Headers:', error.response.headers);
    //         } else if (error.request) {
    //             // اگر درخواست به سرور ارسال شده باشد و اما پاسخی دریافت نشده باشیم
    //             console.error('Error request:', error.request);
    //         } else {
    //             // اگر خطایی رخ داده باشد که مربوط به درخواست نباشد
    //             console.error('Error message:', error.message);
    //         }
    //     };
    //   };
    //     if (city) {
    //         fetchData();
    //     }
    // }, [city]);







  
    return(
        <div>
             <div className="colemn-1">
                <div className="part-up">
                    <div className="name-of-days">{"SAT"}</div>
                </div>
                <div className="part-down">
                < img src={require("./image1.png")}  alt="icon temperature" className="img-colemns" />
                <div className="number-temperature">{}</div>
                {/* weatherData?.main?.temp */}
                </div>
             </div>
        </div>
    )
}


export default Colemns