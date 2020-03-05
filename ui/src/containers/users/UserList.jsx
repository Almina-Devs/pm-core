import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap';
import { get, put, deleteResource } from '../../api/core';
import PasswordModal from './PasswordModal';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class UserList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users : [],
            showPasswordModal : false,
            newPassword : '',
            id : '',
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        get('users').then( res => {
            this.setState({ users : res.data });
        });
    }

    handleUpdate = (evt) => {
        console.log(evt.target.id);
    }

    handleDelete = (evt) => {
        
        const id = evt.target.id;

        confirmAlert({
            title: 'Delete User',
            message: 'Are you sure to delete this user?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`users/${id}`).then(res => {
                        this.loadData();
                    });
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });

    }

    handleUpdatePassword = () => {
        let { id, newPassword } = this.state;
        let data = {
            password : newPassword
        }
        put(`passwordreset/${id}`, data).then((res) => {
            this.setState({  showPasswordModal : false });
        }).catch((err) => {
            console.log(err);
        });
        this.setState({ showPasswordModal : false });
    }

    handlePasswordOnChange = (evt) => {
        this.setState({ 
            newPassword : evt.target.value,
            id : evt.target.id
        });
    }

    render() {

        let { users, showPasswordModal } = this.state;

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
                                    <i className="fas fa-edit" id={user.id} onClick={this.handleEdit}></i>
                                </Col>
                                <Col>
                                    <PasswordModal toggle={showPasswordModal} 
                                                   handleUpdate={this.handleUpdatePassword} 
                                                   onChange={this.handlePasswordOnChange}
                                                   id={user.id}
                                    />
                                </Col>
                                <Col>
                                    <i className="fas fa-trash-alt" id={user.id} onClick={this.handleDelete}></i>
                                </Col>
                            </Row>
                        })
                    }
                </div>
            </React.Fragment>
            
        )
    }
}
