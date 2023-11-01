import React from 'react'
import { WiDirectionRight } from 'react-icons/wi';
import { AiOutlineImport, AiOutlineExport, AiOutlineComment } from 'react-icons/ai';
import { MdOutlineTransitEnterexit } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-warning text-uppercase">Our Services</h5>
                <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon bg-warning">
                            <MdOutlineTransitEnterexit style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </div>
                        <h4 className="mb-3">Transit</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-warning-services rounded" to="Ok_transits">
                            <WiDirectionRight style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon bg-warning">
                            <AiOutlineImport style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </div>
                        <h4 className="mb-3">Import</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-warning-services rounded" to="/import">
                            <WiDirectionRight style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon bg-warning">
                            <AiOutlineExport style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </div>
                        <h4 className="mb-3">Export</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-warning-services rounded" to="/export">
                            <WiDirectionRight style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon bg-warning">
                            <AiOutlineComment style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </div>
                        <h4 className="mb-3">Advices</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-warning-services rounded" to="/consultation">
                            <WiDirectionRight style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon bg-warning">
                            <IoConstructOutline style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </div>
                        <h4 className="mb-3">BTP Construction</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-warning-services rounded" to="/btp">
                            <WiDirectionRight style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-warning rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-3">
                        <h3 className="text-dark mb-3">Call Us For Quote</h3>
                        <p className="text-dark mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-dark mb-0 style={{width: '10px', height: '10px'}}">00 680051785 <hr/>00 699306787</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;
