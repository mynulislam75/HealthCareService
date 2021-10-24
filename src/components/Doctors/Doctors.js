import React, { useEffect, useState } from 'react';

const Doctors = () => {

    const [extraService, setExtraService] = useState([])
    useEffect(() => {
        fetch('./doctordata.JSON')
            .then(res => res.json())
            .then(data => setExtraService(data))
    }, [])
    return (
        <div className="container">
            <div className="row">


                {
                    extraService.map(singleExtraService =>
                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 m-2 border">
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

export default Doctors;