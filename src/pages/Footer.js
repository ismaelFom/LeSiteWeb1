import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';
import { TbBrandFacebook } from 'react-icons/tb';
import { WiDirectionRight } from 'react-icons/wi';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-warning p-4">
                        <Link to="index.html" className="navbar-brand">
                            <h1 className="m-0 text-white">Sunshine</h1>
                        </Link>
                        <p className="mt-3 mb-4 text-dark">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <IoLocation className="me-2"/>
                                <p className="mb-0">Biyem-Assi, Yaoundé, Cameroun</p>
                            </div>
                            <div className="d-flex mb-2">
                                <AiOutlineMail className="me-2"/>
                                <p className="mb-0">sunshinellc@example.com</p>
                            </div>
                            <div className="d-flex mb-2">
                            <BsTelephone className="me-2" />
                                <p className="mb-0">+237 680 05 17 85 </p>
                            </div>
                            <div className="d-flex mb-2">
                            <BsTelephone className="me-2" />
                                <p className="mb-0">+237 699 30 67 87</p>
                            </div>
                            <div className="d-flex mt-4">
                                <Link className="btn btn-warning btn-square me-2" to="#"><CiTwitter/></Link>
                                <Link className="btn btn-warning btn-square me-2" to="#"><TbBrandFacebook/></Link>
                                <Link className="btn btn-warning btn-square me-2" to="#"><SlSocialInstagram/></Link>
                                <Link className="btn btn-warning btn-square me-2" to="#"><SlSocialLinkedin/></Link>
                                <Link className="btn btn-warning btn-square" to="#"><SlSocialYoutube/></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Home</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>About Us</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Our Services</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Meet The Team</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Latest News</Link>
                                <Link className="text-light" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Home</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>About Us</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Our Services</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Meet The Team</Link>
                                <Link className="text-light mb-2" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Latest News</Link>
                                <Link className="text-light" to="#"><WiDirectionRight style={{width: '30px', height: '30px'}}/>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: '#061429'}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                        <p className="mb-0">&copy; 2023 <Link className="text-white border-bottom" to="#">Sunshine LLC.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;
