import { React, useState, useEffect } from "react";
import "./FollowersCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash, faPencil, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from "react-bootstrap";
import * as client from "../Profile/client";

function FollowingCard() {
    const [followIds, setFollowIds] = useState([]);
    const [followId, setfollowId] = useState({ 
        followerId: "",
        followedId: "",});
      const deleteFollow = async (followId) => {
        try {
          await client.deleteFollow(followId);
          setFollowIds(followIds.filter((f) => f !== followId));
        } catch (err) {
            console.log(err);
        }
      };

    return (
        <Card className="canvas-course-card followers-card">
            <Card.Body className="card-body">
                <Card.Title className='fw-normal'>
                    <FontAwesomeIcon className="fa-3x" icon={faUserCircle}>
                    </FontAwesomeIcon>

                    </Card.Title>
                <div className="pt-3">
                <Card.Text className="card-text pb-3">@username</Card.Text>
                <div className="button-container">
                        <button type="button" className='edit-btn' 
                        onClick={() => deleteFollow(followId)}>Unfollow</button>
                        <button type="button" className='edit-btn'>View Profile</button>
                </div>
                </div>
            </Card.Body>
        </Card>
    );
}
export default FollowingCard;