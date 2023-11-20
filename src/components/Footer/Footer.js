import React from 'react'
import CopyRight from './CopyRight';
// import Newsletter from './Newsletter';
import Contacts from './Contacts';
import QuickLink from './QuickLink';
import Partnership from './Partnership';
// import PopularLink from './PopularLink';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6 footer-about">*/}
                        {/*   <Newsletter />*/}
                        {/* </div> */}

                        {/* <div className="col-lg-8 col-md-12"></div> */}
                            <div className="row " style={{ justifyContent: 'space-around' }}>
                                <Contacts />
                                <QuickLink />
                                <Partnership />
                            </div>
                        
                    </div>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export default Footer;
