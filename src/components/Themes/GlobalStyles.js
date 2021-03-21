import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.text };
    margin: 0;
    font-family: Roboto;
    transition: all 0.25s linear;
  }

  a{
    color: ${({ theme }) => theme.highlighted_text };
  }
  
`