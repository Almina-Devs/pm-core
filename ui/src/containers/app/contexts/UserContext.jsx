import React, { createContext, Component } from 'react'
import { get } from '../../../api/core';
import { isAuthenticated } from '../auth/auth';

export const UserContext = createContext();

export default class UserContextProvider extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            user : [],
            ready : false,
        }
        
    }

    componentDidMount() {
        if(isAuthenticated()) {
            get('me').then(res => {
                this.setState({ 
                    ready : true,
                    user : res.data
                });
            });
        } else {
            this.setState({ ready : true });
        }
    }
        
    render() {

        let { ready } = this.state;

        return (
            <UserContext.Provider value={{ ...this.state }}>
                {ready && this.props.children}
            </UserContext.Provider>
        )
    }
}
