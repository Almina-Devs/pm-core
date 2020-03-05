import React, { Component } from 'react'
import { UserContext } from '../app/contexts/UserContext';

export default class UserCard extends Component {

    static contextType = UserContext;
   
    render() {
        
        let { user } = this.context;

        return (
            <React.Fragment>
                <div className="div-container__user-info">{user.name}</div>
            </React.Fragment>
        )
    }
}
