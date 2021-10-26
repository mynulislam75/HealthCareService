import React, { useEffect, useState } from 'react';
import './Doctors.css'
const Doctors = () => {

    return (
        <div className="container">

            <div className="d-flex align-items-center mt-5 mb-3 container">
                <div className="container">
                    <h1 className="text-success">OUR DOCTORS</h1>
                    <small>We Have Our Own Doctors.Everyone is reliable and well mannered</small>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>Dr. Mohammad Azizul</h2>
                        <p>EYE SPECIALISTS</p>
                        <small>9AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:122</small>
                        <br />
                        <small>MBBS,RAJSHAHI MEDICAL COLLEGE</small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>AHMED ALI</h2>
                        <p>EYE SPECIALISTS</p>
                        <small>9AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:122</small>
                        <br />
                        <small>MBBS,DHAKA MEDICAL COLLEGE</small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>MD ALI</h2>
                        <p>CARDIOLOGIST</p>
                        <small>10AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:112</small>
                        <br />
                        <small>MBBS,RAJSHAHI MEDICAL COLLEGE</small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>SAGOR DAS</h2>
                        <p>EYE SPECIALISTS</p>
                        <small>8AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:132</small>
                        <br />
                        <small>MBBS,RAJSHAHI MEDICAL COLLEGE</small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>ALI HASAN</h2>
                        <p>NUROLOGIST</p>
                        <small>9AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:122</small>
                        <br />
                        <small>MBBS,RAJSHAHI MEDICAL COLLEGE</small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>IFTEHKHAR BIN MONIR</h2>
                        <p>EUROLOGIST</p>
                        <small>10AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:192</small>
                        <br />
                     
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div id="single-doctors" className="p-3 m-2 border">
                        <h2>MONIRUL ISLAM</h2>
                        <p>ENT</p>
                        <small>10AM-12PM</small>
                        <br />
                        <small>AD-Din Hospital,Room Number:127</small>
                        <br />
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctors;