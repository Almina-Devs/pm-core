import React, { Component } from 'react'
import { logout } from '../../../api/core';

export default class Logout extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }

    componentDidMount() {

        let data = {
            'token' : localStorage.getItem('access_token')
        }

        logout(data).then(res => {
            console.log('logged out');
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <p>You have been logged out.</p>
            </React.Fragment>
        )
    }
}
