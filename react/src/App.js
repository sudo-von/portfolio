import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
import Query from './pages/Query/'
import Page404 from './pages/Page404/'
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
                <Route exact path='/Query'>
                    <Query theme={theme} themeToggler={themeToggler}/>
                </Route>
                <Route>
                    <Page404 theme={theme} themeToggler={themeToggler}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App