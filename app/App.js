import React from 'react'
// import {
//     BrowserRouter
// } from 'react-router-dom'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './home'
import About from './about'

export default class App extends React.Component {
    // render () {
    //     return <div onClick={() => window.alert(123)}>hello world</div>
    // }
    render () {
        return (
            <div>
                <ul>
                    <li>
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                 </ul>

                 <Switch>
                         <Route exact path='/home' component={Home}></Route>
                         <Route exact path='/about' component={About}></Route>
                 </Switch>
            </div>
        )
    }
}
