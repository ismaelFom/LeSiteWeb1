import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Errors = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <center><h1>CETTE PAGE QUE VOUS RECHERCHEZ N'A PAS ETE TROUVE</h1></center>
        <center><h2>Sorry</h2></center>
        <center><h2>This page doesn't exist.</h2></center>
        <center><h2>Please, proceed to our <Link to="/">Home page</Link></h2></center>

        <Footer />
      </div>
    </div>
  )
}

export default Errors;
