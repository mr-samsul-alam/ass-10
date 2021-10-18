import React from 'react';
import { Card } from 'react-bootstrap';
import "./Testimonial.css"

const Testimonials = () => {
    return (
        <div className="p-5 m-3">
            <h1 className="mb-4">Testimonials</h1>

            <div className="row ">

                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote">Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                     
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante. 
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
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
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote">Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
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
                                <p>They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
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