import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  body {
    font: 16px/1.42 'Lato', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F8F8F8;
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

  *, *:after, *:before {
    box-sizing: border-box;
  }
}`;

export const Container = styled.div`
  width: 1080px;
  margin: 40px auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #EBEBEB;
`
