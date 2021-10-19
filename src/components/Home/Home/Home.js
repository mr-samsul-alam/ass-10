import React from 'react';
import {  Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DemoServices from '../DemoServices/DemoServices';
import Testimonials from '../Testimonial/Testimonial';


const Home = () => {

    return (
        <div className="container">
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/caro-1.jpg"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/caro-2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/caro-3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1>Our SerVices</h1>
            <DemoServices></DemoServices>
             <Link  to="/services"><button className="btn-primary m-3 p-1"> Services </button></Link>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;