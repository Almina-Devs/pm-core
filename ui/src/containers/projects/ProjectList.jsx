import React, { PureComponent } from 'react'
import { get } from '../../api/core';
import { Table } from 'reactstrap';
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
                <div className="div-container__medium">
                    <Table>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                            <th>start</th>
                            <th>end</th>
                            <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map(project => {
                                    return <tr key={project.id}>
                                        <td>{project.id}</td>
                                        <td>{project.name}</td>
                                        <td>{project.description}</td>
                                        <td>{moment(project.start_date).format('MM/DD/YYYY')}</td>
                                        <td>{moment(project.end_date).format('MM/DD/YYYY')}</td>
                                        <td>{project.active ? 'active' : 'inactive'}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>         
            </React.Fragment> 
        )
    }
}

export default ProjectList