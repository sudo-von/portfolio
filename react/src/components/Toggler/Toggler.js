import { useContext } from 'react'
/* Styled-components. */
import styled from 'styled-components'
/* Contexts. */
import { ThemeContext } from 'contexts/ThemeContext'
/* Themes. */
import { lightTheme, darkTheme } from 'themes/Themes'
/* Assets. */
import { ReactComponent as Sun } from 'assets/svg/sun.svg';
import { ReactComponent as Moon } from 'assets/svg/moon.svg';

const Button = styled.button`
  background-color: ${({ theme: { toggler: { background_color } } }) => background_color };
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

    svg {
      height: auto;
      transition: all .3s linear;
      
      // sun icon
      &:first-child {
        transform: ${({ theme }) => theme == lightTheme ? 'translateY(2px)' : 'translateY(100px)'};
        fill: ${({ theme: { toggler: { color } } }) => color };
      }
      
      // moon icon
      &:nth-child(2) {
        transform: ${({ theme }) => theme == lightTheme ? 'translateY(-100px)' : 'translateY(2px)'};
        fill: ${({ theme: { toggler: { color } } }) => color };
      }
  }
`

const Toggler = () => {

  const { themeMode, toggleTheme } = useContext(ThemeContext)

  return (
    <Button theme={themeMode} onClick={toggleTheme}>
      <Sun/>
      <Moon/>
    </Button>
  )
}

export default Toggler