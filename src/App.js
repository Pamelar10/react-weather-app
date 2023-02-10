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
          <a
            href="https://github.com/Pamelar10/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          {" "}
          and is {" "}
          <a
            href="https://snazzy-daffodil-0cbb13.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
  }

export default App;
