import React, { useEffect, useState } from 'react';
import './Services.css'


const Services = () => {


    return (
        <div className="container">

            <div className="row container">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Imaging</h4>
                        <p> Diagnostic Centre Ltd. is an advanced Centre providing the diagnostic imaging services in an elevated ambience, completed by service and report efficiency</p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Pathology</h4>
                        <p>Our Pathology division offers a comprehensive range of laboratory tests for diagnosis, management and prevention of a wide variety of diseases.</p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Allergy (Asthma)</h4>
                        <p>Care for those with allergies, asthma and immunodeficiency. We strive to control your symptoms and improve your quality of life..</p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Anesthesiology</h4>
                        <p>Administration of anesthetic related to surgery. Staff stays throughout your procedure and closely monitors your pain, anxiety and vital organ function.</p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Anticoagulation</h4>
                        <p>Follow-up care for patients with heart disease, which includes the administration of an anticoagulant drug to help prevent blood clots..</p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mt-2 ms-2 mb-3 p-2 bg-white">
                        <h4>Audiology (Hearing)</h4>
                        <p>Care for people of all ages with hearing loss, dizziness and balance disorders.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;