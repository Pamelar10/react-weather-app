import React from "react";
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
       
        <footer>
          This project was coded by Pamela Rosales and is
          <a href="https://github.com/Pamelar10/react-weather-app">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
  }

export default App;
