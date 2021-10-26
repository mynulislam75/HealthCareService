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
                        <h1>Specialties, Services & Treatments</h1>
                        <p>We provide a full range of family care and more than 40 specialty and subspecialty health care services for patients in our service area.
                            Explore specialized care or select a particular service to learn more.</p>
                        <button className="bg-success btn-regular">JOIN US</button>
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
                            <div id="single-service" className="p-4 m-4 h-100 border">

                                <div>
                                    <img className="img-fluid" src={service.img} alt="" />
                                </div>
                                <div>
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                    <Link className="link-btn text-white rounded" to={`/services/${service.name}`}>SEE DETAILS</Link>
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