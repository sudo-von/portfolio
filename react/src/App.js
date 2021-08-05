/* Contexts. */
import { ThemeStore } from './contexts/theme'
/* React-router-dom. */
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
import Query from './pages/Query/'

const App = () => {
  return(
    <ThemeStore>
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
    </ThemeStore>
  )
}

export default App