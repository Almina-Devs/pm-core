import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListPage from '../common/components/ListPage';

class LanesList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            lanes : []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        get('lanes').then((res) => {
            this.setState({ lanes : res.data });
        });
    }

    handleDelete = (evt) => {
        
        const id = evt.target.id;

        confirmAlert({
            title: 'Delete Lane',
            message: 'Are you sure to delete this lane?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`lanes/${id}`).then(res => {
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

        let { lanes } = this.state;

        return (
            <React.Fragment>
                <ListPage listItems={lanes}
                    title={'Lanes'}
                    handleDelete={this.handleDelete}
                    endpoint={'lanes'}
                />
            </React.Fragment> 
        )
    }
}

export default LanesList