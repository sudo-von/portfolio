import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import Portfolio from './pages/Portfolio/'

const App = () => 
    <BrowserRouter>
        <Switch>
            <Route path='/'>
                <Portfolio/>
            </Route>
        </Switch>
    </BrowserRouter>

export default App