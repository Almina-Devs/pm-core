import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { post, get, put } from '../../api/core';

export default class Lane extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title : '',
            label : '',
            project_id : 0,
            projects : [],
            id : this.props.match.params === {} ? '' : this.props.match.params.id,
        }
    }

    componentDidMount() {
        
        get('projects').then((res) => {
            this.setState({ projects :res.data });
        });

        let { id } = this.state;
        if(id !== undefined) {
            get(`lanes/${id}`).then(res => {
                let { title, label, project_id, id } = res.data.lane;
                this.setState({
                    title,
                    label,
                    project_id,
                    id
                });
            });
        }
        
    }

    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name] : value });
    }

    handleSubmit = () => {

        let { title, label, project_id, id } = this.state;
        let data = {
            title,
            label,
            project_id
        }

        if(id === undefined) {
            post('lanes', data).then((res) => {
                window.location = '/lanes';
            }).catch((err) => {
                console.log(err);
            })
        } else {
            put(`lanes/${id}`, data).then(res => {
                window.location = '/lanes';
            }).catch((err) => {
                console.log(err);
            });
        }

    }

    render() {

        let { title, label, project_id, projects } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    <p>New Lane</p>
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col className="col-left">
                                    <Input type="text" name="title" value={title} onChange={this.handleChange} placeholder="lane title" />
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
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
