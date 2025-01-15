import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentsCSS/Checkout.css";
import CheckCircle from "../assets/Check-circle.png";

const Checkout = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-div">
          <div className="checkout-img">
            <img src={CheckCircle} />
          </div>
          <div className="confirmation">
            <p>You're Good to Go!</p>
          </div>
          <div className="confirmation-btn">
            <button onClick={handleGetStartedClick}>Go to Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
