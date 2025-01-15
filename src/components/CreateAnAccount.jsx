import React from "react";
import { useNavigate } from "react-router-dom";
import "../componentsCSS/CreateAnAccount.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CreateAccount() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/verify-number-1");
  };

  // Generate day, month, and year options dynamically
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-sm">
      <div className=" align-items-center mb-4">
        <div className="caret-left fs-4 text-secondary me-3">&#60;</div>
        <div className="registration-heading">
          <h1 className="text-danger fs-3">Get Started Now!</h1>
          <p className="text-muted">Create an account to get started</p>
        </div>
      </div>
      <form>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            className="form-control"
            placeholder="First-name, then surname as on ID"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="DOB" className="form-label">
            Date of Birth
          </label>
          <div className="d-flex gap-2">
            <select id="day" name="day" className="form-select">
              <option value="" disabled defaultValue>
                Day
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select id="month" name="month" className="form-select">
              <option value="" disabled defaultValue>
                Month
              </option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select id="year" name="year" className="form-select">
              <option value="" disabled defaultValue>
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input
                type="radio"
                id="gender-male"
                name="gender"
                value="male"
                className="form-check-input"
              />
              <label htmlFor="gender-male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="gender-female"
                name="gender"
                value="female"
                className="form-check-input"
              />
              <label htmlFor="gender-female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <div className="input-group">
            <select id="country-code" className="form-select" required>
              <option value="+234">+234 Nigeria</option>
              <option value="+1">+1 USA</option>
              <option value="+91">+91 India</option>
            </select>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            className="form-control"
            placeholder="Email Address"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            className="form-control"
            placeholder="************"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="Confirm-Password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="Confirm-Password"
            id="Confirm-Password"
            className="form-control"
            placeholder="************"
          />
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-danger px-5"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
