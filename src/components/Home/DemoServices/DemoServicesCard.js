import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
const DemoServicesCard = (props) => {
    const {id,title,img,price,description}=props.service
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div><Col>
            <Card  >
                <Card.Img variant="top" src={ img} className="w-100 mx-auto p-2" height="300px" />
                <Card.Body>
                    <Card.Title>{ title}</Card.Title>
                     
                </Card.Body>
                <Button variant="primary" onClick={() => handleCardDetails( id)}>See Details
                </Button>
            </Card>
        </Col>

        </div>
    );
};

export default DemoServicesCard;