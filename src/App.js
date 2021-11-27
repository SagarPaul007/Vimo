import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./App.scss";

// components
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
