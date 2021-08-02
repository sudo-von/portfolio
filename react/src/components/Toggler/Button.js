/* Styled-components. */
import styled from 'styled-components'
/* Themes. */
import { lightTheme } from 'themes/Themes'

export const Button = styled.button`
  background-color: ${({ theme : { colors: { secondary } } }) => secondary };
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.4rem;
  position: relative;
  width: 5.5rem;
  height: 2.5rem;
  margin-left: 10px;
  
  svg {
    height: auto;
    transition: all .3s linear;
    
    &:first-child {
      transform: ${({ theme }) => theme == lightTheme ? 'translateY(2px)' : 'translateY(100px)'};
      fill: ${({ theme: { background }}) => background };
    }
  
    &:nth-child(2) {
      transform: ${({ theme }) => theme == lightTheme ? 'translateY(-100px)' : 'translateY(2px)'};
      fill: ${({ theme: { background }}) => background };
    }
  }

`