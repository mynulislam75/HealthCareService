import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {

    // const [singleData, setSingleData] = useState([]);
    const [singleInfo, setSingleInfo] = useState([]);

    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/singleservice.JSON')
            .then(res => res.json())
            .then(data =>setSingleInfo(data))
    }, [])


    // console.log(single)
    // console.log(serviceId)

    //  singleData.find(singledetails=>{
    //     setSingleInfo(singledetails.name===serviceId); 
    //    })


    return (
        <div>
            <h1>abcd{singleInfo.name}</h1>
        </div>
    );
};

export default Singleservice;