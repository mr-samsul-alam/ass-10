import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AboutCard = (props) => {
    const { image, name, subject, degree } = props.doctor
    return (
        <div>
            <Col>
                <Card className="w-100 card-hover"  >
                    <Card.Img variant="top" src={image}  className="w-50 mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{degree}</Card.Text>
                        <Card.Text>{subject}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AboutCard;