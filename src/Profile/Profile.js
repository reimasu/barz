import { Link, useNavigate, useParams } from "react-router-dom";
import './Profile.css'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import * as client from "../LoginPage/client"; 

function Profile() {
    const [gettingUserById, setGetUserId] = useState(null);
    const { id } = useParams();
    const getUserById = async (id) => {
        const user = await client.getUserById(id);
        setGetUserId(user);
      };    

      const fetchProfile = async () => {
        const getUserById = await client.getUserById();
        setGetUserId(getUserById);
    };

    useEffect(() => {
        if (id) {
            gettingUserById(id);
          } else {
            fetchProfile();
          }
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
                    {getUserById && (
                    <div className=" col-2 w-75">
                    
                        <FontAwesomeIcon className="fa-10x" icon={faUserCircle}>
                        </FontAwesomeIcon>

                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark font-weight-bold'> Name: {getUserById.firstName}</p>
                        </div>
                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark'> Username: {getUserById.username}</p>
                        </div>
                        <div className="row w-100 py-3 pe-3">
                            <p className='text-dark'> Email: {getUserById.email}</p>
                        </div>
                        <div className=" py-3 pe-3">
                            <button type="button" className='edit-btn'>Edit</button>
                        </div>
                    </div>
                     )}
                </div>
            </div>
        </div>
    )
}

export default Profile;