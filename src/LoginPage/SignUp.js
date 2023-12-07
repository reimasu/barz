import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInUp.css';

function SignUp () {
    return(
        <div className="d-flex flex-row justify-content-center align-items-center signin-container">
            <h1>Welcome to BARZ</h1>
            <div className="d-flex flex-column align-items-start signin-form-container">
                <h4>Sign Up</h4>
                <div>
                <div className="row w-100">
                    <div className="col pe-3 pb-4 px-0">
                        <input className="form-control py-2" type="text" placeholder="First Name"></input>
                    </div>
                    <div className="col pb-4 pe-0">
                        <input className="form-control py-2" type="text" placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="row w-100 pb-4">
                    <input className="form-control py-2" type="text" placeholder="Username" ></input>
                </div>
                <div className="row w-100 pb-4">
                    <input className="form-control py-2" type="email" placeholder="E-Mail" ></input>
                </div>
                <div className="row w-100 pb-4">
                    <input className="form-control py-2" type="password" placeholder="Password"></input>
                </div>
                <div className="row w-100 pt-3">
                    <button type="button" className="btn py-2">
                        <p>Create Account</p>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;