import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'
import Query from './pages/Query/'
import Page404 from './pages/Page404/'

const App = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Portfolio/>
            </Route>
            <Route exact path='/Query'>
                <Query/>
            </Route>
            <Route>
                <Page404/>
            </Route>
        </Switch>
    </BrowserRouter>

export default App