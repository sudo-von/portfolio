import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme: { body } }) => body.background_color };
    color: ${({ theme: { text } }) => text.color };
    margin: 0;
    font-family: 'Lato';
    transition: all 0.25s linear;
  }

  a{
    color: ${({ theme: { text } }) => text.color };
  }
  
`