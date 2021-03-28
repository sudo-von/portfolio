import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* Screens. */
import { Portfolio, Query } from './components/Screens'

const App = () => 
    <Router>
        <Switch>
            <Route path='/'>
                <Portfolio/>
            </Route>
            <Route path='/query'>
                <Query/>
            </Route>
        </Switch>
    </Router>

export default App