import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoReturnUpBack } from "react-icons/io5";

const CallUsForQuotes = () => {
  const services = ["Import", "Export", "Btp", "Transit", "Consultation"];
  return (
    <div className="container-fluid py-5 wow fadeInUp"  data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-warning text-uppercase">
                Request A Quote
              </h5>
              <h1 className="mb-0">
                Need A Free Quote? Please Feel Free to Contact Us
              </h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-4">
                  <IoReturnUpBack
                    style={{
                      width: "30px",
                      height: "30px",
                      padding: "2px",
                      color: "#091E3E",
                    }}
                  />
                  Reply within 24 hours
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-4">
                  <BsTelephone
                    style={{
                      width: "20px",
                      height: "20px",
                      padding: "2px",
                      color: "#091E3E",
                    }}
                  />
                  24 hrs telephone support
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <div
              className="d-flex align-items-center mt-2 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-warning d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <BsTelephone
                  style={{ width: "50px", height: "50px", color: "#091E3E" }}
                />
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className=" mb-0">+237 680051785 / +237 699306787</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="bg-warning rounded h-100 d-flex align-items-center p-5 wow zoomIn"
              data-wow-delay="0.9s"
            >
              <form>
                <div className="row g-3">
                  <div className="col-xl-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select bg-light border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Select A Service</option>
                      {services.map((service , index) => {
                        return <option key={index} value={service}> {service} </option>;
                      })}
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Request A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUsForQuotes;
