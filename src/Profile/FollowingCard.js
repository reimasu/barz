import { React, useState } from "react";
import "./FollowersCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash, faPencil, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from "react-bootstrap";

function FollowingCard({ }) {
    //^the parameter needs to be the lyrics but not sure
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
                        <button type="button" className='edit-btn'>Unfollow</button>
                        <button type="button" className='edit-btn'>View Profile</button>
                </div>
                </div>
            </Card.Body>
        </Card>
    );
}
export default FollowingCard;