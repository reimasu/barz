import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInUp.css';
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function SignIn () {

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
      await client.signin(credentials);
      navigate("/Kanbas/account");
    };

    return(
        <div className="d-flex flex-row justify-content-center align-items-center signin-container">
            <h1>Welcome back</h1>
            <div className="d-flex flex-column align-items-start signin-form-container">
                <h4>Sign In</h4>
                <div>
                <div className="row pb-4">
                    <input className="form-control py-2" type="text" placeholder="Username" ></input>
                </div>
                <div className="row pb-4">
                    <input className="form-control py-2" type="password" placeholder="Password"></input>
                </div>
                <div className="row pt-3">
                    <button type="button" className="btn py-2">
                        <p>Login</p>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;