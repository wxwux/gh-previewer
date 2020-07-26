import React from "react";
// import ErrorBoundary from "./pages/ErrorBoundary";
import MainPage from "./pages/MainPage/index.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Container, theme } from "~/shared.styles";

const App = () => {
  return (
    // <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <MainPage />
      </Container>
    </ThemeProvider>
    // </ErrorBoundary>
  );
};

export default App;
