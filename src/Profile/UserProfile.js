import { Link, useNavigate, useParams } from "react-router-dom";
import './Profile.css'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import * as client from "./client";

function UserProfile() {
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const user = await client.getUserById(userId);
                setUserProfile(true);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, [userId]);

    return (

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
                        {userProfile && (<div>
                            <div>
                                <FontAwesomeIcon className="fa-10x" icon={faUserCircle}>
                                </FontAwesomeIcon>
                            </div>
                            <p>Username: {userProfile.username}</p>

                            <button type="button" className='edit-btn'
                                >Follow</button>

                            <button type="button" className='edit-btn'
                                >Report</button>

                        </div>)}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default UserProfile;