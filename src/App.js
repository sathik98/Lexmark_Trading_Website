import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  const [ShowLoader, setShowLoader] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
              // ShowLoader={ShowLoader}
              // setShowLoader={setShowLoader}
              ></MainPage>
            }
          ></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
