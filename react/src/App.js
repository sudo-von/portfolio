/* Custom components. */
import Theme from './themes/Theme'
/* Contexts. */
import { ThemeStore } from 'contexts/ThemeContext'
/* React-router-dom. */
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'

const App = () => {
  return(
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Portfolio/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  )
}

export default App