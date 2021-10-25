import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
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

            {/* BANNER PART */}


            <div className="banner-section">
                <div className="row container">
                <div className="description-text position-absolute bottom-0 p-3 col-lg-6 col-md-6 col-sm-6">
                    <h1>WE HAVE OUR OWN SOMETHING</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, praesentium. Ad, nam! Quas at ipsa, labore iste aliquid quae aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit voluptatem nihil corporis velit praesentium quo aspernatur et cum ipsa consequatur minima, recusandae adipisci exercitationem, aperiam vitae doloribus voluptates labore.</p>
                    <button className="bg-danger btn-regular">JOIN US</button>
                </div>
                </div>
              
            </div>

            {/* OUR SERVICES DECLARATION */}
            <div className="d-flex align-items-center mt-5 mb-3 container">
                <div className="container">
                    <h1 className="text-success">OUR SERVICES</h1>
                   <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, qui.</small>
                </div>
            </div>


            {/* SERVICES DATA AND INFORMATION */}

            <div className="container">
                <div className="row">
                    {
                        services.map(service => <div className="col-md-6 col-lg-4">
                            <div id="single-service" className="p-3 m-2 border">

                                <div className="img-container">
                                    <img src={service.img} alt="" />
                                </div>
                                <div>
                                    <h2>{service.name}</h2>
                                    <h4>{service.price}</h4>
                                    <p>{service.description}</p>
                                    <Link className="link-btn" to={`/services/${service.name}`}>SEE DETAILS</Link>
                                </div>


                            </div>

                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;