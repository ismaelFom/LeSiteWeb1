import React from 'react'
import { Link } from 'react-router-dom';
// justify-content-end

const CopyRight = () => {
  return (
    <div className="container-fluid text-white" style={{background: '#061429'}}>
    <div className="container text-center">
        <div className="row ">
            {/* <div className="col-lg-8 col-md-6"></div> */}
                <div className="d-flex" style={{ justifyContent: 'space-around', height: '75px'}}>
                    <p className="mb-0">&copy; 2023 <Link className="text-white border-bottom" to="#">SUNSHINE sarl</Link></p>
                    <p className="mb-0"><Link className="text-white border-bottom" to="#">Terms of Use of the Website </Link></p>
                </div>
            {/* Condition d'itulisation du Site Web */}
        </div>
    </div>
</div>
  )
}

export default CopyRight;
