import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { Row, Col } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
                <p>lanes</p>
                <div className="div-container__large">
                {
                    lanes.map(lane => {
                        return <Row key={lane.id}>
                            <Col md={1}>{lane.id}</Col>
                            <Col md={3}>{lane.title}</Col>
                            <Col md={3}>{lane.label}</Col>
                            <Col md={3}>{lane.project_id}</Col>
                            <Col md={1}>
                                <a href={`/lanes/edit/${lane.id}`}>
                                    <i className="fas fa-edit" id={lane.id} ></i>
                                </a>
                            </Col>
                            <Col md={1}>
                                <i className="fas fa-trash-alt" id={lane.id} onClick={this.handleDelete}></i>
                            </Col>

                        </Row>
                    })
                }
                </div>
            </React.Fragment> 
        )
    }
}

export default LanesList