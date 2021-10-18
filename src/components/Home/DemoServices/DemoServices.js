import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ServicesApi from '../../../Hooks/ServicesApi';
const DemoServices = () => {
    const { services } = ServicesApi()
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div >
            <Row xs={1} md={3}>
                {
                    services.slice(0, 6).map((service) => (<Col>
                        <Card className="w-100">
                            <Card.Img variant="top" src={service.img} className="w-100 mx-auto pt-2" />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.price}</Card.Text>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={() => handleCardDetails(service.id)}>See Details
                            </Button>
                        </Card>
                    </Col>
                    ))}
            </Row>
        </div>
    );
};

export default DemoServices;