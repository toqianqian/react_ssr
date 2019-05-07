import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';


export default () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/list" component={ List } />
    </Switch>
)
