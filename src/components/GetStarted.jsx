import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BuyAirtime from "../assets/Buy_airtime.png";
import FindConnect from "../assets/Find_and_connect.png";
import DeliveryService from "../assets/Delivery_services.png";
import SecuredWallet from "../assets/Secured_wallet.png";
import Pepsa from "../assets/Pepsa.co (2).png";
import "../componentsCSS/GetStarted.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const flashes = [
  {
    h1: "",
    h2: ``,
    p: ``,
    image: Pepsa,
    button: "",
    footer: "",
  },
  {
    h1: "Skip",
    h2: `Find and connect with vendors & stores near you.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: FindConnect,
    button: (
      <Link to="/create-account">
        <button className="btn btn-primary mt-3">Get Started</button>
      </Link>
    ),
    footer: (
      <h3 className="text-muted mt-3">
        Already have an account? <a href="#">Log In</a>
      </h3>
    ),
  },
  {
    h1: "Skip",
    h2: `Buy airtime, data and pay bills effortlessly.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: BuyAirtime,
    button: (
      <Link to="/create-account">
        <button className="btn btn-primary mt-3">Get Started</button>
      </Link>
    ),
    footer: (
      <h3 className="text-muted mt-3">
        Already have an account? <a href="#">Log In</a>
      </h3>
    ),
  },
  {
    h1: "Skip",
    h2: `Enjoy fast and reliable delivery services.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: DeliveryService,
    button: (
      <Link to="/create-account">
        <button className="btn btn-primary mt-3">Get Started</button>
      </Link>
    ),
    footer: (
      <h3 className="text-muted mt-3">
        Already have an account? <a href="#">Log In</a>
      </h3>
    ),
  },
  {
    h1: "",
    h2: `Secured wallet, money-back guarantee for transactions.`,
    p: `Seamless purchase, payment, delivery & more`,
    image: SecuredWallet,
    button: (
      <Link to="/create-account">
        <button className="btn btn-primary mt-3">Get Started</button>
      </Link>
    ),
    footer: (
      <h3 className="text-muted mt-3">
        Already have an account? <a href="#">Log In</a>
      </h3>
    ),
  },
];

function GetStarted() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/create-account");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flashes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="get-started-header w-100 text-end mt-3">
        <h1 className="text-danger fs-6">{flashes[current].h1}</h1>
      </div>
      <div className="get-started-text text-center">
        <h2 className="text-danger fs-4">{flashes[current].h2}</h2>
        <p>{flashes[current].p}</p>
      </div>
      <div className="get-started-image my-4">
        <img
          src={flashes[current].image}
          alt="Visual Representation"
          className="img-fluid"
        />
      </div>
      <div className="get-started-footer w-100 text-center fs-6">
        {current !== 0 && (
          <button
            onClick={handleGetStartedClick}
            className="btn btn-danger btn-lg w-75"
          >
            Get Started
          </button>
        )}
        <p>{flashes[current].footer}</p>
      </div>
    </div>
  );
}

export default GetStarted;
