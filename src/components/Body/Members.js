import React from 'react'
import { CiTwitter } from 'react-icons/ci';
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandFacebook } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import '../../style/pages.css'

// , SlSocialYoutube

const Members = ({ team }) => {
  return (
    <>
      <div className="col-lg-4 wow slideInUp" data-wow-delay={team.time}>
        <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={team.image} alt={team.alt} />
          <div className="team-social">
            <Link className="btn btn-lg btn-warning btn-lg-square rounded" to=""><CiTwitter /></Link>
            <Link className="btn btn-lg btn-warning btn-lg-square rounded" to=""><TbBrandFacebook /></Link>
            <Link className="btn btn-lg btn-warning btn-lg-square rounded" to=""><SlSocialInstagram /></Link>
            <Link className="btn btn-lg btn-warning btn-lg-square rounded" to=""><SlSocialLinkedin /></Link>
            {/* <Link className="btn btn-lg btn-warning btn-lg-square rounded" to=""><SlSocialYoutube /></Link> */}
          </div>
        </div>
        <div className="text-center py-4">
          <h4 className="text-warning">{team.nom}</h4>
          <p className="text-uppercase m-0">{team.description}</p>
        </div>
      </div>
    </div >
    </>
  )
}

export default Members;
