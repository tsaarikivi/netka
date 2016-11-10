import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import store from './store'

import './styles/index.scss'

// create redux store and apply middleware
let reduxStore = createStore(store, applyMiddleware(thunk))

// initialize firebase
import firebase from 'firebase'
/*STAGE CONFIG*/
const fbconfig = {
    apiKey: "AIzaSyAU-YImhTMdrG5pm1i6OMM0QVdCtYgm8r0",
    authDomain: "netka-f0b83.firebaseapp.com",
    databaseURL: "https://netka-f0b83.firebaseio.com",
    storageBucket: "netka-f0b83.appspot.com",
    messagingSenderId: "474549351845"
}
/*PRODUCTION CONFIG
const fbconfig = {
}*/
firebase.initializeApp(fbconfig)

// render applications in place of #app-entry in index.html
ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app-entry')
)