import { Link, useNavigate, useParams } from "react-router-dom";
import './Profile.css'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import * as client from "./client";
import { Routes, Route } from "react-router-dom";
import * as client2 from "../LoginPage/client";

function Profile() {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [currentUser2, setCurrentUser2] = useState([]);


    const getUserById = async (id) => {
        const user = await client.getUserById(id);
        setUser(user);
    };

    const fetchProfile = async () => {
        const userProfile = await client.profile();
        setUser(userProfile);
    };

    const fetchLoggedInAccount = async () => {
        const currentUser = await client.getLoggedInUser();
        setCurrentUser(currentUser);
    }

    const isCurrentUser = () => {
        if ( user === currentUser2) {
            setCurrentUser2(true);
        } else {
            setCurrentUser2(false);
        }
    }

    useEffect(() => {
        if (userId) {
            getUserById(userId);
        }
        else {
            fetchProfile();
        }
        isCurrentUser();
        fetchLoggedInAccount();
    }, []);

    const save = async () => {
        await client.updateUser(user);
    };

    const signout = async () => {
        await client2.signout();
        navigate("/");
    };


    return (
        <>
        {isCurrentUser ? (
        <div className="d-flex flex-col profile-container">
            <div>
                <NavBarVer />
            </div>
                <div className="container m-0 profile-info-container">
                    <div className="row align-items-end">
                        <NavBarHor />
                    </div>
                    <div className='row'>
                    
                    <div className=" col-2 w-75">
                        {user && (<div>
                            <div>
                            <FontAwesomeIcon className="fa-10x" icon={faUserCircle}>
                            </FontAwesomeIcon>
                            </div>
                            
                            <label htmlFor="user" className="form-label">Username</label>
                            <input id="user" className="form-control" value={user.username}
                                onChange={(e) => setUser({
                                    ...user,
                                    username: e.target.value
                                })} />

                            <label htmlFor="pass" className="form-label">Password</label>
                            <input id="pass" className="form-control" value={user.password}
                                onChange={(e) => setUser({
                                    ...user,
                                    password: e.target.value
                                })} />
                            <label htmlFor="first" className="form-label">First Name</label>
                            <input id="first" className="form-control" value={user.firstName}
                                onChange={(e) => setUser({
                                    ...user,
                                    firstName: e.target.value
                                })} />
                            <label htmlFor="last" className="form-label">Last Name</label>
                            <input id="last" className="form-control" value={user.lastName}
                                onChange={(e) => setUser({
                                    ...user,
                                    lastName: e.target.value
                                })} />

                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control" value={user.email}
                                onChange={(e) => setUser({
                                    ...user,
                                    email: e.target.value
                                })} />
                            <label htmlFor="role" className="form-label">User Role</label>
                            <select id="role" value={user.artist ? "ARTIST" : "USER"} className="form-control" onChange={(e) => setUser({
                                ...user,
                                artist: e.target.value === "ARTIST"
                            })}>
                                <option value="USER">User</option>
                                <option value="ARTIST">Artist</option>
                            </select>
                            <div className=" py-3 pe-3">
                                <button type="button" className='edit-btn'
                                onClick={save}>Edit</button>
                            
                                <button type="button" className='edit-btn'
                                onClick={signout}>Sign Out</button>
                            </div>

                            {/* <div className="row w-100 py-3 pe-3">
                                <p className='text-dark font-weight-bold'> Name: {user.firstName}</p>
                            </div>
                            <div className="row w-100 py-3 pe-3">
                                <p className='text-dark'> Username: {user.username}</p>
                            </div>
                            <div className="row w-100 py-3 pe-3">
                                <p className='text-dark'> Email: {user.email}</p>
                            </div>
                            <div className=" py-3 pe-3">
                                <button type="button" className='edit-btn'>Edit</button>
                            </div> */}
                        </div>)}
                    </div>
                </div>
                    
            </div>
        </div>
        ) : (
            <div className=" d-flex flex-col profile-container">
            <div>
                <NavBarVer />
            </div>
            <div className='container m-0 profile-info-container'>
                <div className='row align-items-end'>
                    <div className="row align-items-end">
                        <NavBarHor />
                    </div>
                    <div className=" col-2 w-75">
                        <div>
                            <div>
                                <FontAwesomeIcon className="fa-10x" icon={faUserCircle}>
                                </FontAwesomeIcon>
                            </div>
                            <p>Username: {user.username}</p>

                            <button type="button" className='edit-btn'
                                >Follow</button>

                            <button type="button" className='edit-btn'
                                >Report</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        )
    }

    </>
        )
}

export default Profile;