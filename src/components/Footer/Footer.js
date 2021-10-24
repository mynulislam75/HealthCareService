import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-success">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="m-4">
                            <h5>CONTACTS US</h5>
                            <small><i class="fas fa-phone-alt me-1"></i>89438943834</small><br />
                            <small><i class="fas fa-envelope me-1"></i>bhjhdhj@gmail.com</small><br />
                            <small><i class="fas fa-map-marker-alt me-1"></i>Road 11,House 22,Dhaka</small>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="m-4">
                           <p>About</p>
                           <p>Contacts</p>
                           <p>Privacy and Policy</p>
                           <p>Terms and Condition</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="m-4">
                            <h5>FOLLOW US</h5>
                            <div className="d-flex">
                            <i class="fab fa-twitter me-2"></i>
                            <i class="fab fa-facebook me-2"></i>
                            <i class="fab fa-linkedin me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;