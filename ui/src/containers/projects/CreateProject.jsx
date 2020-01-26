import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { post } from '../../api/core';
import moment from 'moment';

export default class CreateProject extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            name : '',
            description : '',
            startDate : new Date(),
            endDate :  null,
            active : true,
        }
    }

    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name] : value });
    }

    setStartDate = (date) => {
        this.setState( { startDate : moment(date).format("YYYY-MM-DD")  });
    }

    setEndDate = (date) => {
        this.setState({ endDate : moment(date).format("YYYY-MM-DD") });
    }

    handleSubmit = (evt) => {

        evt.preventDefault();

        let { name, description, startDate, endDate, active } = this.state;

        let data = {
            name,
            description,
            startDate,
            endDate,
            active
        }

        post('projects', data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

    }

    render() {

        return (
            <div className="div-container__medium">
                <p>New Project</p>
                <Form>
                    <FormGroup>
                        <Row>
                            <Col className="col-left">
                                <Input type="text" name="name" onChange={this.handleChange} placeholder="project name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                <Input type="textarea" name="description" placeholder="description" rows="4" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                Start Date: 
                            </Col>
                            <Col className="col-right">
                                <DayPickerInput name="start" onDayChange={day => this.setStartDate(day)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                End Date: 
                            </Col>
                            <Col className="col-right">
                                <DayPickerInput name="end" format="MM/DD/YYYY" onDayChange={day => this.setStartDate(day)} />
                            </Col>
                        </Row>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>

            </div>
        )
    }
}
