import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme : { body } }) => body.background_color };
    color: ${({ theme : { p: { color } } }) => color };
    margin: 0;
    font-family: 'Roboto';
  }

  a{
    color: ${({ theme: { a: { color } } }) => color };
  }
  
`