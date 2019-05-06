import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../assets/theme';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Rubik');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.gray};
    
  }

  *, *::before, *::after {
    box-sizing: border-box;
    
  }
`;

const StyleWrapper = styled.div`
  height: 100vh;
  background: ${({theme}) => theme.colors.gray};
  position: relative;
  overflow: hidden;
  transition: 200ms all;
`;


const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <StyleWrapper id="StyleWrapper">
                {children}
            </StyleWrapper>
        </>
    </ThemeProvider>
);

export default Layout;