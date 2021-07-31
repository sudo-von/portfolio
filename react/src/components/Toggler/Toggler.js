/* Styled-components. */
import styled from 'styled-components'
/* Custom hoooks. */
import { useTheme } from 'hooks/useTheme'
/* Themes. */
import { lightTheme, darkTheme } from 'themes/Themes'
/* Custom components. */
import Icon from 'components/Icon/'
/* Assets. */
import { ReactComponent as Sun } from 'assets/sun.svg';
import { ReactComponent as Moon } from 'assets/moon.svg';

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
      transition: all .5s linear;
      
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

  const { theme, toggleTheme } = useTheme()
  const themeMode = theme == 'light' ? darkTheme : lightTheme 

  return (
    <Button theme={themeMode} onClick={toggleTheme}>
      <Sun/>
      <Moon/>
    </Button>
  )
}

export default Toggler