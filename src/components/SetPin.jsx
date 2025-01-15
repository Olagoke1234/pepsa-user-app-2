import React from "react";
import "../componentsCSS/SetPin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

function SetPin() {
  const navigate = useNavigate();

  const handleSetPinClick = () => {
    navigate("/user-identification"); // You can change the URL to wherever the flow continues.
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="text-center mb-4">
        <h1 className="text-danger fs-3">Set your transaction pin</h1>
        <p className="text-muted">Create a 4-digit transaction pin</p>
      </div>
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <form>
          <div className="mb-4">
            <label htmlFor="Pin" className="form-label">
              Transaction Pin
            </label>
            <input
              type="password"
              className="form-control"
              id="Pin"
              name="Pin"
              placeholder="****"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Confirm-Pin" className="form-label">
              Confirm Transaction Pin
            </label>
            <input
              type="password"
              className="form-control"
              id="Confirm-Pin"
              name="Confirm-Pin"
              placeholder="****"
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-danger btn-lg w-100"
              onClick={handleSetPinClick}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SetPin;
