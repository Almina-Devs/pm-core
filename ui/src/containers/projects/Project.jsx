import React, { Component } from 'react'
import { Form, FormGroup, Input, Row, Col } from 'reactstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { get, post, put } from '../../api/core';
import moment from 'moment';
import FormButtons from '../common/components/FormButtons';

export default class Project extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            name : '',
            description : '',
            startDate : new Date(),
            endDate :  '',
            active : true,
            id : this.props.match.params === {} ? '' : this.props.match.params.id,
        }
    }

    componentDidMount() {
        let { id } = this.state;
        if(id !== undefined) {
            get(`projects/${id}`).then(res => {
                let { name, description, active } = res.data.project;
                this.setState({
                    name,
                    description,
                    startDate : moment(res.data.project.start_date).format('MM/DD/YYYY'),
                    endDate : moment(res.data.project.end_date).format('MM/DD/YYYY'),
                    active,
                    id
                });
            });
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
        this.setState({ endDate : moment(date).format("YYYY-MM-DD") },);
    }

    handleSubmit = (evt) => {

        evt.preventDefault();

        let { name, description, startDate, endDate, active, id } = this.state;

        let data = {
            name,
            description,
            startDate : moment(startDate).format('YYYY-MM-DD'),
            endDate : moment(endDate).format('YYYY-MM-DD'),
            active
        }

        if(id === undefined) {
            post('projects', data).then((res) => {
                window.location = '/projects';
            }).catch((err) => {
                console.log(err);
            })
        } else {
            put(`projects/${id}`, data).then(res => {
                window.location = '/projects';
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    render() {

        let { name, description, startDate, endDate, id } = this.state;

        return (
            <div className="div-container__medium">
                <p>{id == undefined ? 'New' : 'Edit' }  Project Details</p>
                <Form>
                    <FormGroup>
                        <Row>
                            <Col className="col-left">
                                <Input type="text" 
                                       name="name"
                                       value={name} 
                                       onChange={this.handleChange} 
                                       placeholder="project name"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                <Input type="textarea"
                                       name="description"
                                       value={description}
                                       onChange={this.handleChange}
                                       placeholder="description" 
                                       rows="4"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                Start Date: 
                            </Col>
                            <Col className="col-right">
                                <DayPickerInput name="startDate"
                                                onDayChange={day => this.setStartDate(day)}
                                                value={startDate}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-left">
                                End Date: 
                            </Col>
                            <Col className="col-right">
                                <DayPickerInput name="endDate"
                                                onDayChange={day => this.setEndDate(day)}
                                                value={endDate}
                                />
                            </Col>
                        </Row>
                        <FormButtons Cancelpath={'projects'} handleSubmit={this.handleSubmit} />
                    </FormGroup>
                </Form>

            </div>
        )
    }
}
