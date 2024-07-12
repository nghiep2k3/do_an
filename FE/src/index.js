import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Detail from "./components/Detail/Detail";
import Bestsell from "./page/BestSell/Bestsell";
import Login from "./page/Login/Login"
import Test from "./page/Test/Test"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dell" />
          <Route path="details" element={<Detail />} />
          <Route path="xiaomi" element={<Bestsell />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
