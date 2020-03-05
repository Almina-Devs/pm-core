import React from 'react';
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText } from 'reactstrap';

export const CustomCard = (props) => {
    return (
        <Card body className="text-left" style={{ padding : 1 }}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.description}</CardSubtitle>
            </CardBody>
            <CardBody>
                <CardText>long desc here</CardText>
                <CardLink href={`/stories/edit/${props.id}`}>
                    <i className="fas fa-edit" id={props.id} ></i>
                </CardLink>
                <CardLink href={`/stories/delete/${props.id}`}>
                    <i className="fas fa-trash-alt" id={props.id} ></i>
                </CardLink>                                        
            </CardBody>
        </Card>)
}