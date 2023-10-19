import React from 'react'
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const PrecingPlan = () => {
  return (
     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-warning text-uppercase">Pricing Plans</h5>
                <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-warning mb-1">Basic Plan</h4>
                            <small className="text-uppercase">For Small Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>49.00<small className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>Action 1</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>Action 2</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>action 3</span><BsCheckLg style={{width: '50px', height: '50px', color: '#dc3545'}}/></div>
                            <div className="d-flex justify-content-between mb-2"><span>Action 4</span><BsCheckLg style={{width: '50px', height: '50px', color: '#dc3545'}}/></div>
                            <Link to="#" className="btn btn-warning py-2 px-4 mt-4">Order Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-warning mb-1">Standard Plan</h4>
                            <small className="text-uppercase">For Medium Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>99.00<small
                                    className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>Action 1</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>Action 2</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>action 3</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-2"><span>Action 4</span><BsCheckLg style={{width: '50px', height: '50px', color: '#dc3545'}}/></div>
                            <Link to="#" className="btn btn-warning py-2 px-4 mt-4">Order Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-warning mb-1">Advanced Plan</h4>
                            <small className="text-uppercase">For Large Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>149.00<small className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>Action 1</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>Action 2</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-3"><span>action 3</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <div className="d-flex justify-content-between mb-2"><span>Action 4</span><BsCheckLg style={{width: '50px', height: '50px', color: '#ffc107'}}/></div>
                            <Link to="#" className="btn btn-warning py-2 px-4 mt-4">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrecingPlan;
