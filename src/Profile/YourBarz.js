import { Link } from 'react-router-dom';
import './Profile.css'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import { Card } from "react-bootstrap";
// import * as client from "./LoginPage/client"; // will add this when we connect to node

function YourBarz() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        artist: false
    });

    return (

        <div className=" d-flex flex-col profile-container">
            <div >
                    <NavBarVer />
            </div>
            <div className='container m-0 profile-info-container'>
                <div className="row align-items-end">
                    <NavBarHor />
                </div>
                <div className='row pt-3 px-5'>
                    <div className=" col">
                        <h3 className='headings'>4 Barz Posted</h3>
                        <hr />
                        <div className="row w-100 py-3 px-3">
                            <div className='grid'>
                                <Card className="barz-card m-0">
                                    <Card.Body>
                                        <Card.Title className='fw-normal'><p className='text-nowrap'>Blah Blah Blah Blah</p></Card.Title>
                                        <div className="icon-footer">
                                        <Card.Text className="card-text"><h6>Posted on: 00/00/00</h6></Card.Text>
                                        <div className="icons">
                                        <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faTrash}></FontAwesomeIcon>
                                        <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPencil}></FontAwesomeIcon>
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

export default YourBarz;