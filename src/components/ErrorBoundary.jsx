// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null, errorInfo: null };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("ErrorBoundary caught an error", error, errorInfo);
//     this.setState({ error, errorInfo });
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div>
//           <h1>Something went wrong.</h1>
//           {this.state.error && <p>{this.state.error.toString()}</p>}
//           {this.state.errorInfo && (
//             <pre>{this.state.errorInfo.componentStack}</pre>
//           )}
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

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
