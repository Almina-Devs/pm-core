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
        get('users').then( res => {
            this.setState({ users : res.data });
        });
    }

    handleEdit = (evt) => {
        console.log(evt.target.id);
    }

    handleDelete = (evt) => {
        console.log(evt.target.id);
    }

    render() {

        let { users } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    {
                        users.map(user => {
                            return <Row key={user.id}>
                                <Col>{user.id}</Col>
                                <Col>{user.name}</Col>
                                <Col>{user.email}</Col>
                                <Col>
                                    <i class="fas fa-edit" id={user.id} onClick={this.handleEdit}></i>
                                </Col>
                                <Col>
                                    <i class="fas fa-key" id={user.id} onClick={this.handleEdit}></i>
                                </Col>
                                <Col>
                                    <i class="fas fa-trash-alt" id={user.id} onClick={this.handleDelete}></i>
                                </Col>
                            </Row>
                        })
                    }
                </div>
            </React.Fragment>
            
        )
    }
}
