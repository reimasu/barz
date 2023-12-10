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
      firstName: "", 
      lastName: "", 
      email: "",  
      artist: false});
    const navigate = useNavigate();
    const signup = async () => {
      try {
        await client.signup(credentials);
        navigate("/Feed");
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    return(
        <div className="d-flex flex-row signin-container">
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

                <div className="row w-100 pb-4">
                    <div className="col pe-3 ps-0">
                        <div className="form-check radio-button-container text-start py-2">
                            <input className="form-check-input" type="radio" 
                            value = {credentials.artist} 
                            onChange= {(e) => setCredentials({
                                ...credentials,
                                artist: false })}
                            name="flexRadioDefault" id="radio_user"/>
                            <label className="form-check-label" for="radio_user">
                                <p>User</p>
                            </label>
                        </div>
                    </div>
                    <div className="col px-0 ps-3">
                        <div className="form-check radio-button-container text-start py-2">
                            <input className="form-check-input" type="radio"
                            value = {credentials.artist} 
                            onChange= {(e) => setCredentials({
                                ...credentials,
                                artist: true })}
                            name="flexRadioDefault" id="radio_artist"/>
                            <label className="form-check-label " for="radio_artist">
                                <p>Artist</p>
                            </label>
                        </div>
                    </div>    
                </div>
                <div className="row w-100 pt-3">
                    <button onClick = {signup} type="button" className="btn py-2">
                        <p className="text-center text-black">Create Account</p>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;