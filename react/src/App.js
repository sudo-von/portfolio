
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'themes/GlobalStyles'
import { lightTheme, darkTheme } from 'themes/Themes'
/* Custom components. */
import Router from './Router'
/* Custom hooks. */
import { useDarkMode } from 'hooks/useDarkMode'

const App = () => {

  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return(
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Router theme={theme} themeToggler={themeToggler}/>
    </ThemeProvider>
  )
}

export default App