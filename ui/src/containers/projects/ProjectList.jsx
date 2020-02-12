import React, { PureComponent } from 'react'
import { get } from '../../api/core';
import { Row, Col } from 'reactstrap';
import moment from 'moment';

class ProjectList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            projects : [],
            statusCode : 0,
        }
    }

    componentDidMount() {
        get('projects').then((res) => {
            this.setState({ 
                projects : res.data,
                statusCode : res.status
            });
        }).catch(err => {
            window.location = "/error";
        });  
    }

    render() {

        let { projects, statusCode } = this.state;

        return (
            <React.Fragment>
                
            <p>projects - {statusCode}</p>
            <div className="div-container__large">
                {
                    projects.map(project => {
                        return <Row key={project.id}>
                            <Col md={1}>{project.id}</Col>
                            <Col>{project.name}</Col>
                            <Col>{project.description}</Col>
                            <Col>{moment(project.start_date).format('MM/DD/YYYY')}</Col>
                            <Col>{moment(project.end_date).format('MM/DD/YYYY')}</Col>
                            <Col>{project.active ? 'active' : 'inactive'}</Col>
                            <Col md={1}>
                                <a href={`/projects/edit/${project.id}`}>
                                    <i className="fas fa-edit" id={project.id} ></i>
                                </a>
                            </Col>
                            <Col md={1}>
                                <i className="fas fa-trash-alt" id={project.id} onClick={this.handleDelete}></i>
                            </Col>

                        </Row>
                    })
                }
            </div>
            </React.Fragment> 
        )
    }
}

export default ProjectList