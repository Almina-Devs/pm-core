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
                <div className="div-container__medium">
                    {
                        stories.map(story => {
                            return <Row key={story.id}>
                                <Col md={1}>{story.id}</Col>
                                <Col>{story.title}</Col>
                                <Col md={1}>
                                    <a href={`/stories/edit/${story.id}`}>
                                        <i className="fas fa-edit" id={story.id} onClick={this.handleEdit}></i>
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
