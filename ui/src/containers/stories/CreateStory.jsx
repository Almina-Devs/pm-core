import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { post, get } from '../../api/core';

export default class CreateStory extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title : '',
            label : '',
            projects : [],
            project_id : 0,
            lanes : [],
            lane_id : 0,
        }
    }

    componentDidMount() {

        get('projects').then((res) => {
            this.setState({ projects :res.data });
        });
        
        get('lanes').then((res) => {
            this.setState({ lanes :res.data });
            console.log('lanes', res.data);
        });

    }

    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name] : value });
    }

    handleSubmit = () => {

        let { title, label, project_id, lane_id } = this.state;
        let data = {
            title,
            label,
            project_id,
            lane_id
        }

        post('stories', data).then((res) => {
            window.location = '/stories';
        }).catch((err) => {
            console.log(err);
        })

    }

    render() {

        let { title, label, project_id, projects, lanes, lane_id } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    <p>New Story</p>
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col className="col-left">
                                    <Input type="text" name="title" value={title} onChange={this.handleChange} placeholder="story title" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-left">
                                    <Input type="text" name="label" value={label} onChange={this.handleChange} placeholder="label" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-left">
                                    <p>Project:</p>
                                </Col>
                                <Col className="col-right">
                                    <select name="project_id" value={project_id} onChange={this.handleChange}>
                                        <option value="-1">select a project</option>
                                        {projects.map(project =>
                                            <option key={project.id} value={project.id}>{project.name}</option>
                                        )};
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-left">
                                    <p>Lanes:</p>
                                </Col>
                                <Col className="col-right">
                                    <select name="lane_id" value={lane_id} onChange={this.handleChange}>
                                        <option value="-1">select a lane</option>
                                        {lanes.map(lane =>
                                            <option key={lane.id} value={lane.id}>{lane.title}</option>
                                        )};
                                    </select>
                                </Col>
                            </Row>

                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
