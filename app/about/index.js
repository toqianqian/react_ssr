import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <p>this is about page</p>
                <Link to={'/home'}>to home</Link>
            </div>
        )
    }
}
