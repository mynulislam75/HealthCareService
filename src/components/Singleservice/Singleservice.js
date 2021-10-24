import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {

    const [singleData, setSingleData] = useState([]);
    const [singleInfo, setSingleInfo] = useState([]);

    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/singleservice.json')
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])

    // console.log(serviceId)
    // console.log(singleData)

    const findData = singleData.find(data => data.name == serviceId)

    console.log(findData)
    // const singleItem=singleData.find(singleDEtails=>singleDEtails.name===serviceId)
    // setSingleInfo(singleItem)
    // console.log(singleInfo)

    // console.log(single)
    // console.log(serviceId)

    //  singleData.find(singledetails=>{
    //     setSingleInfo(singledetails.name===serviceId); 
    //    })


    return (
        <div>
            <h1>abcd:{findData?.name}</h1>
        </div>
    );
};

export default Singleservice;