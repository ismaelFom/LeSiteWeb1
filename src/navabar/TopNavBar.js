import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { TbBrandFacebook } from 'react-icons/tb';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';


const TopNavBar = () => {
    return (

        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                        <small className="me-3 text-light"><IoLocation className="me-2"/>Biyem-Assi, Yaoundé, Cameroun</small>
                        <small className="me-3 text-light"><BsTelephone className="me-2"/>+237 680 05 17 85 / +237 699 30 67 87</small>
                        <small className="text-light"><AiOutlineMail className="me-2"/>sunshinellc@example.com</small>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                        <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><CiTwitter/></Link>
                        <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><TbBrandFacebook/></Link>
                        <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><SlSocialInstagram/></Link>
                        <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="#"><SlSocialLinkedin/></Link>
                        <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to="#"><SlSocialYoutube/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavBar;
