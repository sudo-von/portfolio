import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './themes/GlobalStyles'
import { lightTheme, darkTheme } from './themes/Themes'
/* Custom hooks. */
import { useDarkMode } from './themes/useDarkMode'

const App = () => {
  /* Theme hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return(
    <ThemeProvider theme={themeMode}>      
        <GlobalStyles/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Portfolio theme={theme} themeToggler={themeToggler}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App