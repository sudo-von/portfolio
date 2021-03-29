import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Screens. */
import { Query } from './components/Query/Screens/'

const App = () => 
    <BrowserRouter>
        <Switch>
            <Route path='/'>
                <Query/>
            </Route>
        </Switch>
    </BrowserRouter>

export default App