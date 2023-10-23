import React from 'react'
// import { Link } from 'react-router-dom'
import { WiDirectionUp } from 'react-icons/wi'

const BackToTop  = () => {
  return (
    <div>
        <a href="" class="btn btn-lg btn-lg-square rounded back-to-top" style={{backgroundColor: '#ffc107'}}><WiDirectionUp style={{width: '50px', height: '50px', color: '#091E3E'}}/></a>
    </div>
  )
}

export default BackToTop; 
