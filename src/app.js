import { Card, CardContent } from "@mui/material";
import "./app.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./components/About";

const Layout = () => {
  return (
    <div>
      <header>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

const App = () => {
  const setToken = () => {};
  if (false) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/preferences" element={<Preferences />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
