import React from 'react'
import { CiTwitter } from 'react-icons/ci';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';
import { TbBrandFacebook } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Members = ({ team }) => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-warning text-uppercase">Team Members</h5>
          <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay={team.time}>
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img key={team.id} className="img-fluid w-100" src={team.image} alt={team.alt} />
                <div className="team-social">
                  <Link className="btn btn-lg btn-warning btn-lg-square rounded" to={team.twitter}><CiTwitter /></Link>
                  <Link className="btn btn-lg btn-warning btn-lg-square rounded" to={team.facebook}><TbBrandFacebook /></Link>
                  <Link className="btn btn-lg btn-warning btn-lg-square rounded" to={team.instagram}><SlSocialInstagram /></Link>
                  <Link className="btn btn-lg btn-warning btn-lg-square rounded" to={team.linkedin}><SlSocialLinkedin /></Link>
                  <Link className="btn btn-lg btn-warning btn-lg-square rounded" to={team.youtube}><SlSocialYoutube /></Link>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-warning">{team.name}</h4>
                <p className="text-uppercase m-0">{team.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Members;
