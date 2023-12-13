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
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const user = await client.getUserById(userId);
                setUserProfile(user);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [userId]);

    return (

        <div className=" d-flex flex-column feed-center-container py-4">
            <div className='container'>
                <div className='row pe-3 pb-3'>
                    <div className='col-md-9'>
                        <h2 className="barz_logo">Barz</h2>
                    </div>
                    <div className='col-md-1'>
                        <NavBarHor />
                    </div>
                </div>
            </div>


            <div className='container py-3'>
                <div className='row'>
                    <div className='col-sm-2 p-2'>
                        <NavBarVer />
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