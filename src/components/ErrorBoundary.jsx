import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const handleError = (error, errorInfo) => {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  };

  const componentDidCatch = (error, errorInfo) => {
    handleError(error, errorInfo);
  };

  useEffect(() => {
    const errorHandler = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      handleError(error);
      if (errorHandler) {
        return errorHandler(message, source, lineno, colno, error);
      }
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        {error && <p>{error.toString()}</p>}
        {errorInfo && <pre>{errorInfo.componentStack}</pre>}
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
