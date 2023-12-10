import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInUp.css';
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function SignIn () {

    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({ 
        username: "", 
        password: "",});
      const navigate = useNavigate();
      const signin = async () => {
        try {
          await client.signin(credentials);
          navigate("/Feed");
        } catch (err) {
          setError(err.response.data.message);
        }
      };
    return(
        <div className="d-flex flex-row justify-content-center align-items-center signin-container">
            <h1>Welcome back</h1>
            <div className="d-flex flex-column align-items-start signin-form-container">
                <h4>Sign In</h4>
                <div>
                {error && <div>{error}</div>}
                <div className="row pb-4">
                    <input
                        className="form-control py-2" 
                        id="username"
                        type="text" 
                        placeholder="Username"
                        value={credentials.username}
                        onChange= {(e) => setCredentials({
                            ...credentials,
                            username: e.target.value })}>
                    </input>
                </div>
                <div className="row pb-4">
                    <input
                    className="form-control py-2"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange= {(e) => setCredentials({
                        ...credentials,
                        password: e.target.value })}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            signin();
                        }
                    }}>
                    </input>
                </div>
                <div className="row pt-3">
                    <button onClick={signin} type="button" className="btn py-2">
                        <p>Login</p>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;