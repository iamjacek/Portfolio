import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import fontMontserrat from '../assets/fonts/Montserrat.woff2'
import fontRoboto from '../assets/fonts/Roboto.woff2'
import fontRubik from '../assets/fonts/Rubik.woff2'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${fontRoboto}) format('woff2');   
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: url(${fontRubik}) format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat Semibold';
  font-style: normal;
  font-weight: 400;
  src: url(${fontMontserrat}) format('woff2');
  font-display: swap;
}

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.gray};
    min-height: 100vh;
    height: 100%;
    min-height: -webkit-fill-available;
    ::-webkit-scrollbar {
      width: 10px;
      height: 15px;
      }
      ::-webkit-scrollbar-track-piece  {
      background-color: #F0EBE7;
      }
      ::-webkit-scrollbar-thumb:vertical {
      height: 30px;
      background-color: 	#2e2c2c;
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
    color: ${({ theme }) => theme.colors.white};
  }
`

const StyleWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to left,
    black -150%,
    ${({ theme }) => theme.colors.gray} 150%
  );
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyleWrapper>{children}</StyleWrapper>
    </>
  </ThemeProvider>
)

export default Layout