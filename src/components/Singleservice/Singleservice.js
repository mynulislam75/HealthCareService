import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {

    const [single, setSingle] = useState([]);

    useEffect(() => {
        fetch('/singleservice.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    const { serviceId } = useParams();

    //    const whatt= single.find(testt=>{
    //         return testt.id=serviceId;
    //     })
    //     console.log(whatt)

    return (
        <div>
            <h1>abcd whatt</h1>
        </div>
    );
};

export default Singleservice;