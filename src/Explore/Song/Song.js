import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserCircle, faFire, faMessage } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';

import * as client from "../../Search/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Song.css'

function Song() {
    const {songResultId} = useParams();
    const [results, setResults] = useState(null);
    const [title, setTitle] = useState([]);
    const [albumCover, setAlbumCover] = useState([]);
    const [albumName, setAlbumName] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchSongTitle = async () => {
        const title = await client.getSongTitle(songResultId);
        setTitle(title);
    }

    const fetchSongCover = async () => {
        const albumCover = await client.getSongCover(songResultId);
        setAlbumCover(albumCover)
    }

    const fetchAlbumName = async () => {
        const albumName = await client.getAlbumName(songResultId);
        setAlbumName(albumName)
    }
    

    useEffect(() => {
        fetchSongTitle(songResultId);
        fetchSongCover(songResultId);
        fetchAlbumName(songResultId);
    }, []);


    return(
        <div className='d-flex flex-column explore-container ps-5'>
        <h3 className='headings'>{title}</h3>
        <hr/>
        <div className="grid ps-4">
            <div className="row">
                <div className="col">
                    <div className="row justify-content-start">
                        <img 
                            className="col-3 album-song-page p-0"
                            src={albumCover}></img>
                            <div className="col album-details">
                                <h3 className="text-start">{title}</h3>
                                <h4 className="text-start"><b>On album: </b>{albumName}</h4>
                            </div>
                    </div>
                    <div className="row pt-3">
                        <Button
                            className="col-2 d-inline-flex gap-3 justify-content-center align-items-center make-barz-button"
                            onClick={handleShow}
                            variant="primary">
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            <p>Create Bar</p>
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title><p>Create a Bar for <b>{title}</b></p></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="text" class="form-control" placeholder="Write your fire Bar..."/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="close-barz-button" variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className="make-barz-button" variant="primary" onClick={handleClose}>
                                Create Bar
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="col">
                <ul>
                    <li className="list-group-item py-2">
                        <div className='card feed-card'>
                            <div className='row'>            
                                <div className='col-2 pt-3'>
                                    <FontAwesomeIcon className="fa-2xl" icon={faUserCircle}>
                                    </FontAwesomeIcon>
                                </div>
                            <div className='col-8'>
                                <div className='row justify-content-between py-3'>
                                    <p className='col text-start'>@meow</p>
                                    <h6 className='col text-end'>Posted on:</h6>
                                </div>
                                <div className='row text-start py-3'>
                                    <p className='fw-normal'>“lyrics”</p>
                                </div>
                                <div className='row-3 justify-content-end text-end pb-3'>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        </div>   
                    </li>      
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Song;