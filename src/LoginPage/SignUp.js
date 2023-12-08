import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInUp.css';
import * as client from "./client";

function SignUp () {
    const [error, setError] = useState("");
    const randomID = Math.floor(Math.random() * 10000) + 1;
    const [credentials, setCredentials] = useState({
      _id: randomID.toString(), 
      username: "", 
      password: "", 
      email: "",  
      firstName: "", 
      lastName: "", 
      artist: false});
    const navigate = useNavigate();
    const signup = async () => {
      try {
        await client.signup(credentials);
        navigate("/LandingPage");
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    return(
        <div className="d-flex flex-row justify-content-center align-items-center signin-container">
            <h1>Welcome to BARZ</h1>
            <div className="d-flex flex-column align-items-start signin-form-container">
                <h4>Sign Up</h4>
                {error && <div>{error}</div>}
                <div>
                <div className="row w-100">
                    <div className="col pe-3 pb-4 px-0">
                        <input 
                        value = {credentials.firstName} 
                        onChange= {(e) => setCredentials({
                            ...credentials,
                            firstName: e.target.value })}
                        className="form-control py-2" 
                        type="text" 
                        placeholder="First Name"></input>
                    </div>
                    <div className="col pb-4 pe-0">
                        <input 
                        value = {credentials.lastName} 
                        onChange= {(e) => setCredentials({
                            ...credentials,
                            lastName: e.target.value })}
                        className="form-control py-2" 
                        type="text" 
                        placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="row w-100 pb-4">
                    <input 
                    value = {credentials.username} 
                    onChange= {(e) => setCredentials({
                        ...credentials,
                        username: e.target.value })} 
                    className="form-control py-2" 
                    type="text" 
                    placeholder="Username" ></input>
                </div>
                <div className="row w-100 pb-4">
                    <input 
                    value = {credentials.email} 
                    onChange= {(e) => setCredentials({
                        ...credentials,
                        email: e.target.value })}
                    className="form-control py-2" 
                    type="email" 
                    placeholder="E-Mail" ></input>
                </div>
                <div className="row w-100 pb-4">
                    <input 
                    value = {credentials.password} 
                    onChange= {(e) => setCredentials({
                        ...credentials,
                        password: e.target.value })}
                    className="form-control py-2" 
                    type="password" 
                    placeholder="Password"></input>
                </div>
                <div className="row w-100 pb-4" >
                    <input 
                    value = {credentials.artist} 
                    onChange= {(e) => setCredentials({
                        ...credentials,
                        artist: e.target.checked })}
                    type="checkbox" 
                    class="btn-check" 
                    id="btn-check-artist" 
                    checked autocomplete="off"></input>
                    <label class="btn" for="btn-check-artist">Artist</label>
                </div>
                <div className="row w-100 pt-3">
                    <button onClick={signup} type="button" className="btn py-2">
                        <p>Create Account</p>
                    </button>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default SignUp;