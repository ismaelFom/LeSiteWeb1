import React from 'react'
import { BsCheckLg, BsTelephone } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Btnwhatsapp from '../Error/Btnwhatsapp'



const About = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-7">
                <div className="section-title position-relative pb-3 mb-5">
                    <h5 className="fw-bold text-warning text-uppercase">About Us</h5>
                    <h1 className="mb-0">The Best Transit Solution With 3 Years of Experience</h1>
                </div>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                <div className="row g-0 mb-3">
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                        <h5 className="mb-3"><BsCheckLg style={{width: '50px', height: '50px', color: '#091E3E'}}/>Excellent follow-up</h5>
                        <h5 className="mb-3"><BsCheckLg style={{width: '50px', height: '50px', color: '#091E3E'}}/>Professional Staff</h5>
                    </div>
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                        <h5 className="mb-3"><BsCheckLg style={{width: '50px', height: '50px', color: '#091E3E'}}/>24/7 Support</h5>
                        <h5 className="mb-3"><BsCheckLg style={{width: '50px', height: '50px', color: '#091E3E'}}/>Fair Prices</h5>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <div className="bg-warning d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                    <BsTelephone style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                    </div>
                    <div className="ps-4">
                        <h5 className="mb-2">Call to ask any question</h5>
                        <h4 className=" mb-0">+237 680 05 17 85 / +237 699 30 67 87</h4>
                    </div>
                </div>
                <Link to="/CallUsForQuotes" className="btn btn-warning py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</Link>
            </div>
            <div className="col-lg-5" style={{minHeight: '500px'}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" alt='aboutImg' style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        <Btnwhatsapp />
    </div>
</div>
  )
}

export default About;
