 import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MedInfo from '../../MedInfo/MedInfo';
import AboutCompany from '../AboutCompany/AboutCompany';
import DemoServices from '../DemoServices/DemoServices';
import Testimonials from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className="container py-3">
            <div>
                <Carousel fade>
                    <Carousel.Item interval={1500} >
                        <img
                            className="d-block w-100"
                            src="/caro-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/caro-2.jpg"

                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/caro-3.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

            <h1 className="fw-bolder p-3">Our SerVices</h1>
            <DemoServices></DemoServices>
            <Link to="/services"><Button variant="outline-primary" className=" m-3 px-3 mt-5 rounded-pill">Services </Button></Link>
            <AboutCompany></AboutCompany>
            <Testimonials></Testimonials>
            <MedInfo></MedInfo>


        </div>
    );
};

export default Home;