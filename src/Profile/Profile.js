import { Link } from 'react-router-dom';
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarHor from '../ProfileNavBar/NavBarHor';

function Profile() {
    return(
        <div className='d-flex flex-column feed-center-container'>
            <div className=" py-4">
                <h2 className="barz_logo">Barz</h2>
                <div>
                    <NavBarHor/>
                    {/* call up the horizontal nav bar that youre making with search and feed */}
                </div>
            </div>
            <>              
            </>
        </div>
    )
}

export default Profile;