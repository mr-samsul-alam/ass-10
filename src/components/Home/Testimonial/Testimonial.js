import React from 'react';
import { Card } from 'react-bootstrap';
import "./Testimonial.css"

const Testimonials = () => {
    return (
        <div className=" m-3">
            <h1 className="mb-4 fw-bolder p-5"  >  What People Say About Us</h1>

            <div className="row ">

                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover" >
                        <Card.Header className="quote"> I give this company 5 stars</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                     
                                loving. God bless you all. Special thanks to the doctors for their effort and hard work.I highly recommend RDC.
                                </p>
                                <footer className="blockquote-footer">
                                     Mr: <cite title="Source Title"> Tomas Smith</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4 ">
                    <Card className="card-hover">
                        <Card.Header className="quote">The amazing clinic! Wonderful Support!</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                I highly recommend RDC. I appreciate how helpful and kind they have been through this entire process. 
                                </p>
                                <footer className="blockquote-footer">
                                Mr:  <cite title="Source Title">Michael James</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote">Highly recommend!</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Supplies are always here before I need them. Very personable, receive calls to see what supplies I need. What customer service should be. Highly recommend!{' '}
                                </p>
                                <footer className="blockquote-footer">
                                Mr:  <cite title="Source Title"> Michael Richard</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote"> Thanks for Helping us!</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>I highly recommend MSC. Their customer service is incomparable. I appreciate how helpful and kind they have been through this entire process.  
                                </p>
                                <footer className="blockquote-footer">
                                     Mr: <cite title="Source Title">James</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;