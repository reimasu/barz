import './LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.scss';
function LandingPage() {
    return(
        <div className='d-flex flex-column landing-style'>
            <div className="d-flex flex-row justify-content-center align-items-center landing-title-container">
                <h1>Barz</h1>
                <h3>Share your favorite Barz</h3>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center landing-button-container'>
                <button type="button" class="landing-button">
                    <h3>Sign Up</h3>
                </button>
                <button type="button" class=" landing-button btn">
                    <h3>Sign In</h3>
                </button>
            </div>
        </div>
    )
}

export default LandingPage;