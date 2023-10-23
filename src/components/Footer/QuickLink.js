import React from 'react'
import { WiDirectionRight } from 'react-icons/wi';
import { Link } from 'react-router-dom';


const QuickLink = () => {
  return (
    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
    <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="text-light mb-0">Quick Links</h3>
    </div>
    <div className="link-animated d-flex flex-column justify-content-start">
        <Link className="text-light mb-2" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />Home</Link>
        <Link className="text-light mb-2" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />About Us</Link>
        <Link className="text-light mb-2" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />Our Services</Link>
        <Link className="text-light mb-2" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />Meet The Team</Link>
        <Link className="text-light mb-2" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />Latest News</Link>
        <Link className="text-light" to="#"><WiDirectionRight style={{ width: '30px', height: '30px' }} />Contact Us</Link>
    </div>
</div>
  )
}

export default QuickLink;
