import React from "react";
// import ErrorBoundary from "./pages/ErrorBoundary";
import MainPage from "./pages/MainPage/index.jsx";
import { GlobalStyles, Container } from "./App.styles";

const App = () => {
  return (
    // <ErrorBoundary>
    <Container>
      <GlobalStyles />
      <MainPage />
    </Container>
    // </ErrorBoundary>
  );
};

export default App;
