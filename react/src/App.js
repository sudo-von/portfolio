/* Custom components. */
import Theme from './contexts/Theme'
/* Contexts. */
import { ThemeStore } from 'contexts/ThemeContext'
/* React-router-dom. */
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
import Query from './pages/Query/'

const App = () => {
  return(
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Portfolio/>
            </Route>
            <Route exact path='/query'>
              <Query/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  )
}

export default App