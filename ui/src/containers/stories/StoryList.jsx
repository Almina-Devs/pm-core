import React, { PureComponent } from 'react'
import { get } from '../../api/core';
import { Row, Col } from 'reactstrap';

export default class StoryList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            stories : [],
            statusCode : 0,
        }
    }

    componentDidMount() {
        get('stories').then((res) => {
            this.setState({ 
                stories : res.data,
                statusCode : res.status
            });
        }).catch(err => {
            window.location = "/error";
        });  
    }

    handleEdit = (evt) => {

    }

    handleDelete = (evt) => {

    }

    render() {

        let { stories, statusCode } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__large">
                    <p>stories - {statusCode}</p>
                    {
                        stories.map(project => {
                            return <Row key={project.id}>
                                <Col>{project.id}</Col>
                                <Col>{project.title}</Col>
                                <Col>{project.description}</Col>
                                <Col>{project.label}</Col>
                                <Col>
                                    <i class="fas fa-edit" id={project.id} onClick={this.handleEdit}></i>
                                </Col>
                                <Col>
                                    <i class="fas fa-key" id={project.id} onClick={this.handleEdit}></i>
                                </Col>
                                <Col>
                                    <i class="fas fa-trash-alt" id={project.id} onClick={this.handleDelete}></i>
                                </Col>
                            </Row>
                        })
                    }
                </div>
            </React.Fragment> 
        )
    }
}
