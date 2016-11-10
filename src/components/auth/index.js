import React from 'react'
import firebase from 'firebase'

export default class Auth extends React.Component {
    componentDidMount() {
        // set firebase auth eventlistener
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("logged in as:", user)
                // we could send a reduxStore.dispatch() here
                // or call an action to fetch user data from db
                // this should at least lead to a state change
            } else {
                console.log("logged out")
            }
        })
    }

    render() {
        return <div></div>
    }
}
