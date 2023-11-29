import React from 'react'
import { Link } from 'react-router-dom';
import "../../style/pages.css"

const Errors = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5 wow slideInUp" data-wow-delay="0.2s">
            <img className="img-fluid w-100" src="img/oops.jpg" alt="imageOops Error" />
          </div>
          <div className="col-lg-7 wow slideInUp Sorry" data-wow-delay="0.3s">
            <center><h1>Sorry</h1></center>
            <center><h1>This page doesn't exist.</h1></center>
            <center><h1>Please, proceed to our</h1></center>
            <center><h1><Link to="/">Home page</Link></h1></center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Errors;
