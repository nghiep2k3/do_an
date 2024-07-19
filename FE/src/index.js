// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Detail from "./components/Detail/Detail";
import Bestsell from "./page/BestSell/Bestsell";
import Login from "./page/Login/Login";
import Test from "./page/Test/Test";
import Admin from "./page/Admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { CartProvider } from "./CartContext";
import { CartProvider } from "react-use-cart";
import Profile from "./page/Profile/Profile";
import Payment from "./page/Payment/Payment";
import Laptop from "./page/Laptop/Laptop";
import Phone from "./page/Phone/Phone";
import Pk from "./page/Pk/Pk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="dell" />
            <Route path="details/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/accessories" element={<Pk />} />

            <Route path="xiaomi" />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
