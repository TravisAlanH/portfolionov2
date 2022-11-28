import "./App.css";
import "./Styles/NavBar.css";
import "./Styles/Home.css";
import "./Styles/Links.css";
import NavBar from "./Components/NavBar";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPath from "./Components/RoutesPath";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Content" id="Content">
          <RoutesPath />
        </div>
      </div>
    </Router>
  );
}

export default App;
