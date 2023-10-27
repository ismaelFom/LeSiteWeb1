import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Newsletter = () => {
    const [input, setInput]=useState("");
    const inputHandle = (e) => {
            setInput(e.target.value);
    };

     const submitHandle = (e) => {
        e.preventDefault();
        if (input) {
            console.log(input)
            //Ajout à Firebase
        }
     }

    

    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-warning p-4">
            <Link to="index.html" className="navbar-brand">
                <h1 className="m-0 text-white">Sunshine</h1>
            </Link>
            <p className="mt-3 mb-4 text-dark">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
            <form action="" onSubmit={submitHandle}>
                <div className="input-group">
                    <input type="text" onChange={inputHandle} className="form-control border-white p-3" placeholder="Your Email" />
                    <button className="btn btn-dark">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Newsletter;
