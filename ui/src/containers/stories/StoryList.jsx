import React, { PureComponent } from 'react'
import { get } from '../../api/core';
import { Table } from 'reactstrap';

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

    render() {

        let { stories, statusCode } = this.state;

        return (
            <React.Fragment>
            <p>stories - {statusCode}</p>
                <div className="div-container__medium">
                    <Table>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>label</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stories.map(project => {
                                    return <tr key={project.id}>
                                        <td>{project.id}</td>
                                        <td>{project.title}</td>
                                        <td>{project.description}</td>
                                        <td>{project.label}</td>
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
