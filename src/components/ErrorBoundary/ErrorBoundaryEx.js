import React, { useState } from "react";
import Counter from "./Counter";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundaryEx = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCount(0)}
      >
        <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryEx;
