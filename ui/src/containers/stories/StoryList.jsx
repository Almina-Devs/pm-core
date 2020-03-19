import React, { PureComponent } from 'react'
import { get, deleteResource } from '../../api/core';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ListPage from '../common/components/ListPage';

export default class StoryList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            stories : [],
            statusCode : 0,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
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

        const id = evt.target.id;

        confirmAlert({
            title: 'Delete Story',
            message: 'Are you sure to delete this story?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteResource(`stories/${id}`).then(res => {
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

        let { stories } = this.state;

        return (
            <React.Fragment>

                <ListPage listItems={stories}
                    title={'Stories'}
                    handleDelete={this.handleDelete}
                    endpoint={'stories'}
                    containerClass={'div-container__medium'}
                />

                {/* <div className="div-container__medium">
                    {
                        stories.map(story => {
                            return <Row key={story.id}>
                                <Col md={1}>{story.id}</Col>
                                <Col>{story.title}</Col>
                                <Col>{story.label}</Col>
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

                <Row>
                    <Col>
                        <a href={`/stories/create`}>
                            <i className="fas fa-plus"></i>
                            {`  New Story`}
                        </a>
                    </Col>
                </Row> */}

            </React.Fragment> 
        )
    }
}
