import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'

const Router = ( { theme, themeToggler } ) =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Portfolio theme={theme} themeToggler={themeToggler}/>
            </Route>
        </Switch>
    </BrowserRouter>

export default Router