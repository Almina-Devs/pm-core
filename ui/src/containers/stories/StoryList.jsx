import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { Row, Col } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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

    handleDelete = (evt) => {
        confirmAlert({
            title: 'Delete Story',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`stories/${evt.target.id}`).then(res => {
                        console.log('res', res.data)
                    });
                }
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }



    render() {

        let { stories, statusCode } = this.state;

        return (
            <React.Fragment>
                <div className="div-container__medium">
                    {
                        stories.map(story => {
                            return <Row key={story.id}>
                                <Col md={1}>{story.id}</Col>
                                <Col>{story.title}</Col>
                                <Col md={1}>
                                    <a href={`/stories/edit/${story.id}`}>
                                        <i className="fas fa-edit" id={story.id} ></i>
                                    </a>
                                </Col>
                                <Col md={1}>
                                    <i className="fas fa-trash-alt" id={story.id} onClick={this.handleDelete}></i>
                                </Col>
                            </Row>
                        })
                    }
                </div>
            </React.Fragment> 
        )
    }
}
