import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { login } from '../../../api/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : '',
        }
    }

    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name] : value });
    }

    handleSubmit = () => {

        let { email, password } = this.state;

        if(email === '' || password === '') {
            toast('Email and Password are requried');
            return;
        }
        
        let data = {
            email,
            password
        }

        login(data).then((res) => {
            localStorage.setItem('access_token', res.data.token);

            let { state } = this.props.location;

            if(state && state.from) {
                window.location = state.from.pathname;    
            } else {
                window.location = '/dashboard';
            }

        }).catch((err) => {
            toast('There was a problem logging in.');
            console.log(err)
        })

    }

    render() {

        let { email, password } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    <p>Login</p>
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col className="col-left">
                                    <Input type="text" name="email" value={email} onChange={this.handleChange} placeholder="email/username" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-left">
                                    <Input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
                                </Col>
                            </Row>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
                <ToastContainer autoClose={5000} />
            </React.Fragment>
        )
    }
}
