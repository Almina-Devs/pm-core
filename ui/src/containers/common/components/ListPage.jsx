import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap';
import moment from 'moment';

export default class ListPage extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            listItems : [],
            statusCode : 0,
        }

    }

    render() {

        let { title, endpoint, listItems, handleEdit, handleDelete } = this.props;

        return (
            <React.Fragment>                
                <p>{ title }</p>
                <div className="div-container__large">
                    {
                        listItems.map(item => {

                            console.log(item)

                            return (
                                <Row key={item.id}>

                                    <Col md={1}>{item.id}</Col>

                                    {item.hasOwnProperty('name') &&
                                        <Col md={3}>{item.name}</Col>
                                    }

                                    {item.hasOwnProperty('title') &&
                                        <Col md={3}>{item.title}</Col>
                                    }

                                    {item.hasOwnProperty('project_id') &&
                                        <Col md={3}>{item.project_id}</Col>
                                    }

                                    {item.hasOwnProperty('label') &&
                                        <Col md={3}>{item.label}</Col>
                                    }

                                    {item.hasOwnProperty('start_date') &&
                                        <Col>{moment(item.start_date).format('MM/DD/YYYY')}</Col>
                                    }
                                    
                                    {item.hasOwnProperty('end_date') &&
                                        <Col>{moment(item.end_date).format('MM/DD/YYYY')}</Col>
                                    }

                                    {item.hasOwnProperty('active') &&
                                        <Col>{item.active ? 'active' : 'inactive'}</Col>
                                    }
                                    
                                    <Col md={1}>
                                        <a href={`/${endpoint}/edit/${item.id}`}>
                                            <i className="fas fa-edit" id={item.id} onClick={handleEdit} ></i>
                                        </a>
                                    </Col>
                                    
                                    <Col md={1}>
                                        <i className="fas fa-trash-alt" id={item.id} onClick={handleDelete}></i>
                                    </Col>

                                </Row>
                            )
                        })
                    }
                </div>
                <Row>
                    <Col>
                        <a href={`/${endpoint}/create`}>
                            <i className="fas fa-plus"></i>
                            {`  New ${title}`}
                        </a>
                    </Col>
                </Row>
            </React.Fragment> 
        )
    }
}
