import React, { useEffect, useState } from 'react';

const Services = () => {

    const [extraService, setExtraService] = useState([])
    useEffect(() => {
        fetch('./servicefake.JSON')
            .then(res => res.json())
            .then(data => setExtraService(data))
    }, [])
    return (
        <div>
            {
                extraService.map(singleExtraService =>
                    <div>
                        <img className="img-fluid" src={singleExtraService.img} alt="" />
                        <h2>{singleExtraService.name}</h2>
                        <p>{singleExtraService.description}</p>

                    </div>
                )
            }
        </div>
    );
};

export default Services;