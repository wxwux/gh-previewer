import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const theme = {
  borders: "#ebebeb",
  mainBg: "#f8f8f8",
  blue: "#63A9F3",
  hovers: "#f8f8f8",
};

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  body {
    font: 16px/1.42 'Lato', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.mainBg};
    color: #2A2928;
  }

  #root {
    position: relative;
    overflow: hidden;
    min-width: 1100px;
    min-height: 100%;
  }

  img {
    display: block;
    max-width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    font-weight: normal;
    font-style: normal;
  }

  ul {
    margin: 0;
    padding: 0; 

    li {
      list-style: none;
    }
  }

  svg {
    display: block;
  }

  button {
    cursor: pointer;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }
}`;

export const Container = styled.div`
  width: 1080px;
  margin: 40px auto 100px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${(props) => props.theme.borders};
`;
export const Spacer = styled.div`
  padding: 20px;
  display: ${(props) => (props.spreaded ? "flex" : "block")};
  align-items: center;
  justify-content: space-between;
  text-align: ${(props) => (props.centered ? "center" : "left")};
`;

export const Link = styled.a`
  color: #63AAF5;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline
  }  
`;

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: ${(props) => (props["no-margin"] ? 0 : "25px")};
  font-size: 18px;  
`;
