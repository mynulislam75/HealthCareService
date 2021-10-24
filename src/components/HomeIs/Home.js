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
            <div className="banner-portion">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">jhfghfhf</div>
                        <div className="col-md-6">guiyuyudfd</div>
                    </div>
                </div>

            </div>


            {/* OUR SERVICES DECLARATION */}
            <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <div>
                    <h1>WHAT WE PROVIDE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat incidunt laudantium optio quis nesciunt id illo possimus facilis sit quae?</p>
                </div>
            </div>


            {/* SERVICES DATA AND INFORMATION */}

            <div className="container">
                <div className="row">
                    {
                        services.map(service => <div className="col-md-6 col-lg-4">
                            <div className="p-3 m-2 border">

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