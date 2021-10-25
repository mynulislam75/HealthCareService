import React, { useEffect, useState } from 'react';
import './Services.css'


const Services = () => {

    const [extraService, setExtraService] = useState([])
    useEffect(() => {
        fetch('./servicefake.JSON')
            .then(res => res.json())
            .then(data => setExtraService(data))
    }, [])
    return (
        <div className="container">
            <div className="d-flex align-items-center mt-5 mb-3 container">
                <div className="container">
                    <h1 className="text-success">OUR SERVICES</h1>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, qui.</small>
                </div>
            </div>
            <div className="row">


                {
                    extraService.map(singleExtraService =>
                        <div className="col-md-6 col-lg-4">
                            <div id="single-services-info" className=" p-3 m-2 border">
                                <div className="img-container">
                                    <img className="img-fluid" src={singleExtraService.img} alt="" />
                                </div>

                                <h2>{singleExtraService.name}</h2>
                                <p>{singleExtraService.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;