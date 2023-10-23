import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';
import { TbBrandFacebook } from 'react-icons/tb';
import { Link } from 'react-router-dom'


const Contacts = () => {
  return (
    <div className="col-lg-4 col-md-12 pt-5 mb-5">
    <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="text-light mb-0">Contact Us</h3>
    </div>
    <div className="d-flex mb-2">
        <IoLocation className="me-2" />
        <p className="mb-0">Biyem-Assi, Yaoundé, Cameroun</p>
    </div>
    <div className="d-flex mb-2">
        <AiOutlineMail className="me-2" />
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
        <Link className="btn btn-warning btn-square me-2" to="#"><CiTwitter /></Link>
        <Link className="btn btn-warning btn-square me-2" to="#"><TbBrandFacebook /></Link>
        <Link className="btn btn-warning btn-square me-2" to="#"><SlSocialInstagram /></Link>
        <Link className="btn btn-warning btn-square me-2" to="#"><SlSocialLinkedin /></Link>
        <Link className="btn btn-warning btn-square" to="#"><SlSocialYoutube /></Link>
    </div>
</div>
  )
}

export default Contacts;
