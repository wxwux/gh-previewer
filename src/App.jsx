import React from "react";
import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./pages/ErrorBoundary";
import MainPage from "./pages/MainPage";
import { GlobalStyles, Container, theme } from "~/shared.styles";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <MainPage />
      </Container>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
