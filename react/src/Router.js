import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'

const Router = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Portfolio/>
            </Route>
        </Switch>
    </BrowserRouter>

export default Router