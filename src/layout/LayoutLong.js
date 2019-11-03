import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../assets/theme';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
@import url('https://fonts.googleapis.com/css?family=Rubik');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.gray};
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    
  }

  html{
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }
`;

const StyleWrapper = styled.div`
  position: relative;
  width: 100%;

  margin: 0;
  padding: 0;
  background: linear-gradient(to left,black  -220%,${({theme}) => theme.colors.gray} 150%);
`;


const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <StyleWrapper>
                {children}
            </StyleWrapper>
        </>
    </ThemeProvider>
);

export default Layout;