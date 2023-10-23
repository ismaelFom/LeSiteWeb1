import React from 'react'
import { Link } from 'react-router-dom';

const CopyRight = () => {
  return (
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
  )
}

export default CopyRight;
