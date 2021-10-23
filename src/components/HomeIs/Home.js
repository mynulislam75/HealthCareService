import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./servicesdata.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="carousel-container container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imges"
                            src="https://media.istockphoto.com/photos/medical-technology-background-picture-id1255646957"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50 imges"
                            src="https://media.istockphoto.com/photos/medical-technology-background-picture-id1255646957"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50 imges"
                            src="https://media.istockphoto.com/photos/medical-technology-background-picture-id1255646957"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="services-container row container">
                {
                    services.map(service => <div className="singleService col-lg-4">

                            <img src={service.img} alt="" />
                            <h2>Name:{service.name}</h2>
                            <h4>Price:{service.price}</h4>
                            <p>{service.description}</p>
                            <Link to={`/services/${service.price}`}>SEE DETAILS</Link>
                            
                    </div>)
                }

            </div>

        </div>
    );
};

export default Home;