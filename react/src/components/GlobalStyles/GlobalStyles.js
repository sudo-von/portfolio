/* Styled-components. */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme : { background } }) => background };
    color: ${({ theme : { colors: { primary } } }) => primary };
    margin: 0;
    font-family: 'Roboto';
  }

  a{
    color: ${({ theme : { colors: { secondary } } }) => secondary };
  }

  .primary{
    color: ${({ theme : { colors: { primary } } }) => primary };
  }
  .secondary{
    color: ${({ theme : { colors: { secondary } } }) => secondary };
  }
  .accent{
    color: ${({ theme : { colors: { accent } } }) => accent };
  }

  p{
    font-size: 14px;
  }

`

export default GlobalStyles