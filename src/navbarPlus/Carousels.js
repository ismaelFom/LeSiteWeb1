import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img className="w-100" src="img/container-1.jpg" alt="Image1" />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Dynamic & Efficient</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">A Solution For You</h1>
            <Link to="#" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img className="w-100" src="img/huge-1.jpg" alt="Image2" />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Dynamic & Efficient</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">A Solution For You</h1>
                  <Link to="#" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carousels;
