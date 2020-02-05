import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap';
import { get } from '../../api/core';

export default class UserList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users : [],
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <p>users</p>
        )
    }
}
