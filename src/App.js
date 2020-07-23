import React from "react";
import ErrorBoundary from "./boundary";

const App = () => {
  return (
    <ErrorBoundary>
      <h1>Hello World!</h1>
    </ErrorBoundary>
  );
};

export default App;
