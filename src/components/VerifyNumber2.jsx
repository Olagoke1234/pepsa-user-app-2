import React from "react";
import "../componentsCSS/VerifyNumber2.css";

function VerifyNumber() {
  return (
    <>
      <div className="container">
        <div className="caret-left">&#60;</div>
        <div className="verification-instruction">
          <h1>Verify your phone number</h1>
          <p>We sent a four digit code to you phone via SMS</p>
        </div>
        <div className="digit-section">
          <div className="individual-digit"></div>
          <div className="individual-digit"></div>
          <div className="individual-digit"></div>
          <div className="individual-digit"></div>
          <div className="individual-digit"></div>
        </div>
        <div className="send-code-section">
          <p>
            <span className="countdown">Resend Code</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyNumber;
