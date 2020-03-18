import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListPage from '../common/components/ListPage';

class ProjectList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            projects : [],
            statusCode : 0,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        get('projects').then((res) => {
            this.setState({ 
                projects : res.data,
                statusCode : res.status
            });
        }).catch(err => {
            window.location = "/error";
        });
    }

    handleDelete = (evt) => {

        const id = evt.target.id;

        confirmAlert({
            title: 'Delete Project',
            message: 'Are you sure to delete this project?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`projects/${id}`).then(res => {
                        this.loadData();
                    });
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    }

    render() {

        let { projects } = this.state;

        return (
            <React.Fragment>
                <ListPage title="Projects"
                    listItems={projects}
                    handleDelete={this.handleDelete}
                    endpoint={'projects'}
                />
            </React.Fragment> 
        )
    }
}

export default ProjectList