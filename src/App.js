import React from "react";
// import ErrorBoundary from "./boundary";
import { MainPage } from "./pages";
import { GlobalStyles, GWrapper, GContainer } from "./App.styles";

const App = () => {
  return (
    // <ErrorBoundary>
      <GWrapper>
        <GContainer>
          <GlobalStyles />
          <MainPage />
        </GContainer>
      </GWrapper>
    // </ErrorBoundary>
  );
};

export default App;
