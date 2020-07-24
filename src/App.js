import React from "react";
// import ErrorBoundary from "./boundary";
import { MainPage } from "./pages";
import { GlobalStyles, Wrapper, Container } from "./App.styles";

const App = () => {
  return (
    // <ErrorBoundary>
    <Wrapper>
      <Container>
        <GlobalStyles />
        <MainPage />
      </Container>
    </Wrapper>
    // </ErrorBoundary>
  );
};

export default App;
