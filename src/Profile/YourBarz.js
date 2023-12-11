import { Link } from 'react-router-dom';
import './Profile.css'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
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
                        <FontAwesomeIcon className="fa-10x" icon={faUserCircle}>
                        </FontAwesomeIcon>

                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark font-weight-bold'> Name: </p>
                        </div>
                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark'> Username: </p>
                        </div>
                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark'> Email: </p>
                        </div>
                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark'> Joined: </p>
                        </div>
                        <div className=" py-3 pe-3">
                            <button type="button" className='edit-btn'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourBarz;