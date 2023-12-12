import { Link } from 'react-router-dom';
import './Profile.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHor from '../ProfileNavBar/NavBarHor';
import NavBarVer from '../ProfileNavBar/NavBarVer';
import FollowingCard from './FollowingCard';



function Following(){
    

    return(
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
                        <h3 className='headings'>4 Following</h3>
                        <hr />

                        <div className="row w-100 py-3 pe-3">
                            <FollowingCard/>
                            <FollowingCard/>
                            <FollowingCard/>
                            <FollowingCard/>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Following;