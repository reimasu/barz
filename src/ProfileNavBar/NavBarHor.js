import { Link, useLocation } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faBell, faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBarHor() {
    const icons = [,faUserCircle];
    const links = ["Home", "Search"];
    const { pathname } = useLocation();

    return(
        <div className="d-flex flex-column">  
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
            </div>
        </div> 
    )
}

export default  NavBarHor;