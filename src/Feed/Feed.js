import { Link } from 'react-router-dom';
import './Feed.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feed() {
    return(
        <div className='d-flex flex-column feed-center-container'>
            <h3 className='headings'>Your Feed</h3>
            <hr/>
            <p>HELLO</p>
            <>
                <div className='card feed-card'>
                    <div className='row'>            
                        <div className='col-2'>
                            <FontAwesomeIcon className="fa-2xl" icon={faUserCircle}>
                            </FontAwesomeIcon>
                        </div>
                        <div className='col-8'>
                            <p> Meow</p>
                        </div>
                    </div>
                </div>                
            </>
        </div>
    )
}

export default Feed;