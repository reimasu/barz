import { Link, useLocation, useNavigate } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faMusic, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import * as client from "./../Search/client.js"
import { useEffect, useState } from "react";

function NavBar() {
    const icons = [faHouse, faMagnifyingGlass];
    const links = ["Feed", "Explore"];
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState([]);
    const [booleanVar, setBoolean] = useState(false);
    const [booleanGuest, setBooleanGuest] = useState(false);

    const fetchLoggedInAccount = async () => {
        const currentUser = await client.getLoggedInUser();
        setCurrentUser(currentUser);
    }

    const validUser = () => {
        if (currentUser.artist) {
            setBoolean(true); 
        } else {
            setBoolean(false);
        } 
    }

    const isGuest = () => {
        if (currentUser === undefined) {
            setBooleanGuest(true);
        } else {
            setBooleanGuest(false);
        }
    }
    {console.log(JSON.parse(JSON.stringify(currentUser)))}
    useEffect(() => {
        fetchLoggedInAccount();
        validUser();
        isGuest();
    }, [booleanVar, booleanGuest])

    {console.log(booleanGuest)}
    return(
        <div className="d-flex flex-column">  
            <div className="align-self-center py-4">
                <h2 className="barz_logo">Barz</h2>
            </div>
            <div className="d-md-none d-lg-block b-sidebar b-nav">
                {links.map((link, index) => (
                    <Link
                    key={index}
                    to={`/Barz/${link}`}
                    className={`nav-links list-group-item nav-item d-flex flex-row
                    justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes(link) && "active"}`}>
                    <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={icons[index]} >
                    </FontAwesomeIcon>
                    {link}
                    </Link>
                ))}
                    <Link
                        to={`/`}
                        className={`nav-links list-group-item nav-item d-flex flex-row
                        justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes("Profile") && "active"}`}>
                        <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={faUserCircle} >
                        </FontAwesomeIcon>
                        Profile
                    </Link>
                ) : (
                    <Link   
                        to={`/Barz/Profile`}
                        className={`nav-links list-group-item nav-item d-flex flex-row
                        justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes("Profile") && "active"}`}>
                        <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={faUserCircle} >
                        </FontAwesomeIcon>
                        Profile
                    </Link>
                )}
                
                {/* </button> */}
                {booleanVar && (<Link
                    to={`/Barz/Studio`}
                    className={`nav-links list-group-item nav-item d-flex flex-row
                    justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes("Studio") && "active"}`}>
                    <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={faMusic} >
                    </FontAwesomeIcon>
                    Studio
                </Link>
                )}

                <></>
                
            </div>
        </div> 
    )
}

export default NavBar;