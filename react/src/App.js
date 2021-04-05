import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
import Query from './pages/Query/'

const App = () => 
    <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <Portfolio/>
            </Route>
            <Route path='/Query' exact>
                <Query/>
            </Route>
        </Switch>
    </BrowserRouter>

export default App