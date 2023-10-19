import React from 'react'
import { BsCheckLg, BsPeople } from 'react-icons/bs'

const Facts = () => {
  return (
    <div className="container-fluid facts py-5 pt-lg-0">
    <div className="container py-5 pt-lg-0">
        <div className="row gx-0 d-flex align-items-center justify-content-center">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div className="bg-warning shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                    <div className="bg-warning d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                        <BsPeople style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-dark mb-0">Happy Clients</h5>
                        <h1 className="text-dark mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                    <div className="bg-light d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                    <BsCheckLg style={{width: '50px', height: '50px', color: '#091E3E'}}/>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-dark mb-0">Projects Done</h5>
                        <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-warning shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                        <i className="fa fa-award text-warning"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-white mb-0">Win Awards</h5>
                        <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Facts
