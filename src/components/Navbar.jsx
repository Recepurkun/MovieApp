import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Movies from "./Movies";
import About from "./About";

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li style={{ marginTop: "20px" }}>
              <strong>Movie App With React</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/About">About Me</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Movies />} /> {/* default olarak movies ana sayfa olarak gelsin diye yapildi */}
          <Route path="/Movies" element={<Movies />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
