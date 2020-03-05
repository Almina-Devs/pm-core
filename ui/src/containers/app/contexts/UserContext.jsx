import React, { createContext, Component } from 'react'
import { get } from '../../../api/core';

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
        get('me').then(res => {
            this.setState({ 
                ready : true,
                user : res.data
            });
        });
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
