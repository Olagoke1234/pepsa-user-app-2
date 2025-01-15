import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import CreateAccount from "./components/CreateAnAccount";
import VerifyNumber1 from "./components/VerifyNumber1";
import VerifyNumber2 from "./components/VerifyNumber2";
import SetPin from "./components/SetPin";
import UserIdentification from "./components/UserIdentification";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyTerms from "./components/PrivacyTerms";
import Indemnity from "./components/Indemnity";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    // <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/set-pin" element={<SetPin />} />
        <Route path="/verify-number-1" element={<VerifyNumber1 />} />
        <Route path="/verify-number-2" element={<VerifyNumber2 />} />
        <Route path="/user-identification" element={<UserIdentification />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-terms" element={<PrivacyTerms />} />
        <Route path="/indemnity" element={<Indemnity />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    // </ErrorBoundary>
  );
}

export default App;
