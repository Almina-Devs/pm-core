import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListPage from '../common/components/ListPage';

export default class TaskList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tasks : [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        get('tasks').then((res) => {
            this.setState({ 
                tasks : res.data
            });
        }).catch(err => {
            window.location = "/error";
        });
    }

    handleDelete = (evt) => {

        const id = evt.target.id;

        confirmAlert({
            title: 'Delete Task',
            message: 'Are you sure to delete this Task?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`tasks/${id}`).then(res => {
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

        let { tasks } = this.state;

        return (
            <React.Fragment>

                <ListPage listItems={tasks}
                    title={'Tasks'}
                    handleDelete={this.handleDelete}
                    endpoint={'tasks'}
                    containerClass={'div-container__medium'}
                />

            </React.Fragment> 
        )
    }
}
