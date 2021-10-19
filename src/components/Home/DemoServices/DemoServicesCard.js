import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
const DemoServicesCard = (props) => {
    const { id, title, img } = props.service
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div><Col className="p-2" >
            <Card className=" card-hover">
                <Card.Img variant="top" src={img} className="  mx-auto p-2" height="300px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary" onClick={() => handleCardDetails(id)}>See Details
                    </Button>
                </Card.Body>

            </Card>
        </Col>

        </div>
    );
};

export default DemoServicesCard;