import { Link } from 'react-router-dom';
import './Profile.css'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import FollowersCard from './FollowersCard';
import * as client from "./client";

function Followers() {
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                // Fetch the logged-in user's followers
                const loggedInAccount = await client.getLoggedInUser();
                const fetchedFollowers = await client.findFollowsByFollowerId(loggedInAccount.followerId);
                setFollowers(fetchedFollowers);
            } catch (error) {
                console.error('Error fetching followers:', error);
            }
        };

        fetchFollowers();
    }, []);

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
                    <div className='col-2 w-75'>
                        <h3 className='headings'>{followers.length} Followers</h3>
                        <hr />
                        <div className="row w-100 py-3 pe-3">
                            {followers && followers.map((follower) => (
                                <FollowersCard key={follower._id} follower={follower} />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Followers;