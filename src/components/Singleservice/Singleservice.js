import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {

    const [singleData, setSingleData] = useState([]);

    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/singleservice.json')
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])


    const findData = singleData.find(data => data.name == serviceId)

    console.log(findData)

    return (
        <div className="container">
            <h4>Single Service Details</h4>
            <div className="border d-flex justify-content-center p-4">

                <div>
                    <h1>{findData?.name}</h1>
                    <br />
                    <p>{findData?.more}</p>
                </div>
            </div>

        </div>
    );
};

export default Singleservice;