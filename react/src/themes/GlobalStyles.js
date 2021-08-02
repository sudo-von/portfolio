import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme : { background } }) => background };
    color: ${({ theme : { colors: { primary } } }) => primary };
    margin: 0;
    font-family: 'Roboto';
  }

  a{
    color: ${({ theme : { colors: { secondary } } }) => secondary };
  }
  
`