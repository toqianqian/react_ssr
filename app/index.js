// import App from './App'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// import React from 'react'

// -------------------------ReactDOM.hydrate
// ReactDOM.hydrate(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Provider } from 'react-redux';
import createStore from './redux/store/create';
const defaultStore = window.__STORE__ || {};

const store = createStore(defaultStore);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

