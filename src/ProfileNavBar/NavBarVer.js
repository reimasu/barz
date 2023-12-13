import { Link, useLocation } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faBell, faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBarVer() {
    const links = ["Profile", "Your Barz", "Followers", "Following"];
    const { pathname } = useLocation();
    const formattedLinks = links.map((link) => link.replace(/\s+/g, '-'));

    return(
        <div className="d-flex flex-column nav-bar-ver">  
            <div className="align-self-start py-4 px-4">
                <h2 className="barz_logo">Barz</h2>
            </div>
            <div className="d-md-none d-lg-block b-sidebar b-nav">
            {formattedLinks.map((link, index) => (
                <Link
                key={index}
                to={`/Barz/${link}`} // Use the formatted link
                className={`nav-links list-group-item nav-item d-flex 
                flex-row justify-content-left align-middle text-nowrap py-3 px-4 ${pathname.includes(link) && "active"}`}>
                {links[index]}
                </Link>
            ))}
            </div>
        </div> 
    )
}
export default  NavBarVer;