import React from 'react';
import m from './m.png'
import sino from './sino.jpg'
import { Link } from 'react-router-dom';
const Partnership = () => {
  return (
    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
    <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="text-light mb-0">Partnership</h3>
        
    </div>
    <Link to=''>
    <img src={m} alt='m' style={{width:'130px', height: '150px',  marginRight:'25px'}} ></img>
    </Link>
    <Link to=''>
    <img src={sino} alt='sino' style={{width:'130px', height: '150px' }} ></img>
    </Link>
    </div>
  )
}

export default Partnership;
