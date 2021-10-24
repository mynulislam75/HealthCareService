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
        <div>
            <h1>name:{findData?.name}</h1>
        </div>
    );
};

export default Singleservice;