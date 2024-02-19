import React, { createContext, useState } from "react";
import { ReactDOM } from "react-dom";
// import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Downsection from "./components/down section ";

  export const citysContext = createContext();


function App() {
  const [city, setCity] = useState ("");

  return (
    <citysContext.Provider value={{city, setCity}}>
    <div className="all-page">
      <Header/>
      <TopSection/>
      <Downsection/>
    </div>
    </citysContext.Provider>
  );
}

export default App;
