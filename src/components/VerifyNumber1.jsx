import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../componentsCSS/VerifyNumber1.css";
import { useNavigate } from "react-router-dom";

function VerifyNumber1() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [timerEnded, setTimerEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setTimerEnded(true); // Timer ended
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleResendCode = () => {
    setTimerEnded(false);
    setTimeLeft(120); // Restart timer
  };

  const handleVerifyClick = () => {
    navigate("/set-pin"); // Navigate to SetPin after phone number verification
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="w-100 text-start mb-3">
        {/* <div className="caret-left fs-4 text-secondary me-3"> &#60;</div> */}
      </div>
      <div className="text-center mb-4">
        <h1 className="text-danger fs-3">Verify your phone number</h1>
        <p className="text-muted verify-number-p">
          We sent a four-digit code to your phone via SMS
        </p>
      </div>
      <div className="p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="digit-section d-flex justify-content-center mb-4">
          <div className="individual-digit">
            <input type="text" className="border-0 text-center" maxLength="1" />
          </div>
          <div className="individual-digit">
            <input type="text" className="border-0 text-center" maxLength="1" />
          </div>
          <div className="individual-digit">
            <input type="text" className="border-0 text-center" maxLength="1" />
          </div>
          <div className="individual-digit">
            <input type="text" className="border-0 text-center" maxLength="1" />
          </div>
          <div className="individual-digit">
            <input type="text" className="border-0 text-center" maxLength="1" />
          </div>
        </div>
        <div className="send-code-section text-center mb-4 w-100">
          <p className="text-muted text-end">
            {timerEnded ? (
              <span
                className="text-primary"
                role="button"
                onClick={handleResendCode} // Attach resend handler
              >
                Resend code
              </span>
            ) : (
              `Resend code in ${String(minutes).padStart(2, "0")}:${String(
                seconds
              ).padStart(2, "0")}`
            )}
          </p>
        </div>
      </div>
      <button
        className="btn btn-danger btn-lg w-100"
        onClick={handleVerifyClick}
      >
        Verify Number
      </button>
    </div>
  );
}

export default VerifyNumber1;
