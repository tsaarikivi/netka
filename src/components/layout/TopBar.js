import React from 'react'
import { Link } from 'react-router'
import firebase from 'firebase'

import './topbar.scss'

export default class TopBar extends React.Component {
    render() {
        return (
            <nav className="top-bar">
                <ul>
                    <li className="left bold title"><Link to="/shop">Netka</Link></li>
                    <li className="right"><Link to="/cart"><img src="./images/cart.svg" /></Link></li>
                    <li className="right"><Link to="/user"><img src="./images/user.svg" /></Link></li>
                    <li className="right"><button onClick={() => this.login()}>LOGIN</button></li>
                    <li className="right"><button onClick={() => this.logout()}>LOGOUT</button></li>
                </ul>
            </nav>
        )
    }

    login() {
        firebase.auth().signInWithEmailAndPassword("tero.saarikivi@outlook.com", "salasana")
    }

    logout() {
        firebase.auth().signOut();
    }

    register() {
        firebase.auth().createUserWithEmailAndPassword("tero.saarikivi@outlook.com", "salasana");
    }
}