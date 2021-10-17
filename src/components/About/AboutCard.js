import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AboutCard = (props) => {
    const {_id, image, name, subject, degree } = props.doctor
    return (
        <div>
            <Col>
                <Card className="w-75">
                    <Card.Img variant="top" src={image}  className="w-50 mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{degree}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AboutCard;