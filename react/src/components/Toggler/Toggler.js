import { useContext } from 'react'
/* Contexts. */
import { ThemeContext } from 'contexts/ThemeContext'
/* Assets. */
import { ReactComponent as Sun } from 'assets/svg/sun.svg'
import { ReactComponent as Moon } from 'assets/svg/moon.svg'
/* Custom components. */
import { Button } from './Button'

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