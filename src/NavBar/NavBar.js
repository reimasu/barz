import { Link, useLocation, useNavigate } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faBell, faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import * as client from "./../Search/client.js"
import Profile from "../Profile/Profile";
import { useState, useEffect } from "react";

function NavBar() {
    const icons = [faHouse, faMagnifyingGlass];
    const links = ["Home", "Explore"];
    const { pathname } = useLocation();

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const currentUser = await client.getLoggedInUser();
        setUser(currentUser);
    };

    useEffect(() => {
        fetchAccount();
    }, []);


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
                <button>
                <Link
                    onClick = {() => {
                        if (fetchAccount() === null) {
                            navigate("/");
                        }
                        else {
                            navigate("/Barz/Profile");
                        }
                    }}
                    // to={`/Barz/Profile`}
                    className={`nav-links list-group-item nav-item d-flex flex-row
                    justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes("Profile") && "active"}`}>
                    <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={faUserCircle} >
                    </FontAwesomeIcon>
                    Profile
                </Link>
                </button>
                console.log(user.artist);
                {user.artist &&
                <Link
                // onClick = {() => {
                //     if (fetchLoggedInAccount() === null) {
                //         navigate("/");
                //     }
                // }}
                to={`/Barz/ArtSongs`}
                className={`nav-links list-group-item nav-item d-flex flex-row
                justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes("ArtSongs") && "active"}`}>
                <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={faUserCircle} >
                </FontAwesomeIcon>
                Songs
            </Link>
                }
            </div>
        </div> 
    )
}

export default NavBar;