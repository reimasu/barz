import { Link } from 'react-router-dom';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import { Card } from "react-bootstrap";
// import * as client from "./LoginPage/client"; // will add this when we connect to node

function Followers() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        artist: false
    });

    return (

        <div className="d-flex flex-col profile-container">
            <div >
                <NavBarVer />
            </div>
            <div className='container m-0 profile-info-container'>
                <div className="row align-items-end">
                    <NavBarHor />
                </div>
                <div className='row pt-3 px-5'>
                    <div className="col">
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