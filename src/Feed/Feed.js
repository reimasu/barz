import { Link } from 'react-router-dom';
import './Feed.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle, faFire, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feed() {
    return(
        <div className='d-flex flex-column feed-center-container'>
            <h3 className='headings'>Your Feed</h3>
            <hr/>
            <>
                <div className='card feed-card'>
                    <div className='row'>            
                        <div className='col-2 pt-3'>
                            <FontAwesomeIcon className="fa-2xl" icon={faUserCircle}>
                            </FontAwesomeIcon>
                        </div>
                        <div className='col-8'>
                            <div className='row justify-content-between py-3'>
                                <p className='col text-start'>@username</p>
                                <h6 className='col text-end'>Posted on: 00/00/00</h6>
                            </div>
                            <div className='row text-start py-3'>
                                <p className='fw-normal'>“Ble bla bloo fire song lyrics”</p>
                            </div>
                            <div className='row-3 justify-content-end text-end pb-3'>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPlus}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>                
            </>
        </div>
    )
}

export default Feed;