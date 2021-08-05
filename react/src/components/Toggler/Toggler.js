import { useContext } from 'react'
/* Contexts. */
import { ThemeContext } from 'contexts/theme'
/* Assets. */
import { ReactComponent as Sun } from 'assets/svg/navbar/sun.svg'
import { ReactComponent as Moon } from 'assets/svg/navbar/moon.svg'
/* Custom components. */
import { Button } from './Button'

const Toggler = () => {

  const { toggleTheme } = useContext(ThemeContext)

  return (
    <Button onClick={toggleTheme} title='Tema'>
      <Sun/>
      <Moon/>
    </Button>
  )
}

export default Toggler