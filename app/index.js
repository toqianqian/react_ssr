import App from './App'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
