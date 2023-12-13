import { Link } from 'react-router-dom';

import './Profile.css'
import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import { Card } from "react-bootstrap";
import * as client from "./client";

function Followers() {

    // **functions i added in followers card that i ref here:**
    // const [followers, setFollowers] = useState([]); //holding an array of followers for currentUser
    // const [username, setUsername] = useState('');

    // useEffect(() => {
    //     const fetchLoggedInAccount = async () => {
    //         try {
    //             const currentUser = await client.getLoggedInUser();
    //             if (currentUser) {
    //                 setUsername(currentUser.username);
    //                 const fetchedFollowers =
    //                     await client.findFollowsByFollowerId
    //                         (currentUser.followerId); // getting the followerId from the current user
    //                 setFollowers(fetchedFollowers);
    //             }
    //         } catch (error) {
    //             console.error('Error getting current users followers:', error);
    //         }
    //     };
    //     fetchLoggedInAccount();
    // },
    // const deleteFollow = async (followId) => {
    //     try {
    //         await client.deleteFollow(followId);
    //         setFollowers(followers.filter((f) => f._id !== followId));
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

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

    return (                      <h3 className='headings'>{followers.length} Followers</h3>

                        <h3 className='headings'>4 Followers</h3>

                        <hr />
                        <div className="row w-100 py-3 pe-3">
                            <div className='grid'>
                                <Card className="followers-card">
                                    <Card.Body className="card-body">
                                        <Card.Title className='fw-normal'>
                                            <FontAwesomeIcon className="fa-3x" icon={faUserCircle}>
                                            </FontAwesomeIcon>
                                            </Card.Title>
                                        <div className="pt-3">
                                        <Card.Text className="card-text pb-3"><p>@username</p></Card.Text>
                                        <div className="d-inline-flex gap-2">
                                                <button type="button" className='btn edit-btn'><h6 className='px-3 m-0'>Remove</h6></button>
                                                <button type="button" className='btn edit-btn'><h6 className='px-3 m-0 text-nowrap'>View Profile</h6></button>
                                        </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Followers;

