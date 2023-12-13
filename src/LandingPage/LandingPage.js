import { Link } from 'react-router-dom';
import './LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function LandingPage() {
    return(
        <div className='d-flex flex-column landing-style'>
            <div className="d-flex flex-row justify-content-center align-items-center landing-title-container">
                <h1 className='px-5'>Barz</h1>
                <h3>Share your favorite Barz</h3>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center landing-button-container'>
                <Link to="/signup">
                    <button type="button" className="landing-button btn">
                        <h3>Sign Up</h3>
                    </button>
                </Link>
                <Link to="/signin">
                    <button type="button" className="landing-button btn">
                        <h3>Sign In</h3>
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/Barz/Feed">
                    <p>Continue as Guest</p>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;