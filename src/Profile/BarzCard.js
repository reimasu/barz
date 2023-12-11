import { React, useState } from "react";
import "./BarzCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from "react-bootstrap";

function BarzCard({ }) {
    //^the parameter needs to be the lyrics but not sure
    return (
        <Card className="canvas-course-card barz-card">
            <Card.Body>
                <Card.Title className='fw-normal'>Blah Blah Blah Blah</Card.Title>
                <div className="icon-footer">
                <Card.Text className="card-text">Posted on: 00/00/00</Card.Text>
                <div className="icons">
                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faTrash}></FontAwesomeIcon>
                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPencil}></FontAwesomeIcon>
                </div>
                </div>
            </Card.Body>
        </Card>
    );
}
export default BarzCard;