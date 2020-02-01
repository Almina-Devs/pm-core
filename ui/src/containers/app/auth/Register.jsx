import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { register } from '../../../api/core';
import { toast } from 'react-toastify';

export default class Register extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name : '',
            email : '',
            password : '',
            registered : false,
        }
    }

    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name] : value });
    }

    handleSubmit = () => {

        let { name, email, password } = this.state;
        let data = {
            name,
            email,
            password,
            organization_id : 1
        }

        register(data).then((res) => {
            localStorage.setItem('access_token', res.data.token);
            this.notify();
            this.setState({ registered : true });
        }).catch((err) => {
            toast('There was a problem registering.  Please try again.');
        })

    }

    notify = () => {
        toast.info("You're Registered!", {
            autoClose : 5000
        });
    }

    render() {

        let { name, email, password, registered } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    {!registered ?
                        <React.Fragment>
                            <p>Register</p>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col className="col-left">
                                            <Input type="text" name="name" value={name} onChange={this.handleChange} placeholder="username" />
                                        </Col>
                                    </Row>                            
                                    <Row>
                                        <Col className="col-left">
                                            <Input type="text" name="email" value={email} onChange={this.handleChange} placeholder="email" />
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
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <h3>Success!  You are now registered!</h3>
                            <a href="/dashboard">
                                <Button>Go to the dashboard</Button>
                            </a>
                        </React.Fragment>
                    }
                    
                </div>
            </React.Fragment>
        )
    }
}
