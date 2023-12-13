import React, { useState, useEffect } from "react";
import "./FollowersCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import * as client from "./client";

function FollowersCard(username1) {
    const [followers, setFollowers] = useState([]); //holding an array of followers for currentUser
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchLoggedInAccount = async () => {
            try {
                const currentUser = await client.getLoggedInUser();
                if (currentUser) {
                    setUsername(currentUser.username);
                    const fetchedFollowers =
                        await client.findFollowsByFollowerId
                            (currentUser.followerId); // getting the followerId from the current user
                    setFollowers(fetchedFollowers);
                }
            } catch (error) {
                console.error('Error getting current users followers:', error);
            }
        };

        fetchLoggedInAccount();
    }, []);

    const deleteFollow = async (followId) => {
        try {
            await client.deleteFollow(followId);
            setFollowers(followers.filter((f) => f._id !== followId));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
                <Card className="canvas-course-card followers-card">
                    <Card.Body className="card-body">
                        <Card.Title className='fw-normal'>
                            <FontAwesomeIcon className="fa-3x" icon={faUserCircle} />
                        </Card.Title>
                        <div className="pt-3">
                            <Card.Text className="card-text pb-3">@{username1}</Card.Text>
                            <div className="button-container">
                                <button type="button" className='edit-btn' onClick={() => deleteFollow(followers._id)}>Remove</button>
                                <button type="button" className='edit-btn'>View Profile</button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
    
        </div>
    );
}

export default FollowersCard;
