import React, { useState } from 'react'
import team1 from '../../img/team1.jpg';
import team2 from '../../img/team2.jpg';
import team3 from '../../img/team3.jpg';
import Members from './Members';

const TeamMembers = () => {
  const [team] = useState([
    {id: 1, nom: 'BOSS1', description: 'Designation 1', image: team1, alt: 'img1', time: '0.3s', twitte: '', facebook: '', instagram: '', linkedin: '', youtube: '' },
    {id: 2, nom: 'BOSS2', description: 'Designation 2', image: team2, alt: 'img2', time: '0.6s', twitte: '', facebook: '', instagram: '', linkedin: '', youtube: ''  },
    {id: 3, nom: 'BOSS3', description: 'Designation 3', image: team3, alt: 'img3', time: '0.9s', twitte: '', facebook: '', instagram: '', linkedin: '', youtube: ''  }
  ])



  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-warning text-uppercase">Team Members</h5>
          <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
        </div>

        {team && team.map((team) => (
          <Members key={team.id} team={team} />
                    ))}
        
      </div>

    </div>
  )
}

export default TeamMembers;
