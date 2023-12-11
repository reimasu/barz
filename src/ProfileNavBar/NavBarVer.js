import { Link, useLocation } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faBell, faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBarVer() {
    const icons = [,,,,];
    const links = ["Profile", "Your Barz", "Followers", "Following"];
    const { pathname } = useLocation();
    const formattedLinks = links.map((link) => link.replace(/\s+/g, '-'));

    return(
        <div className="d-flex flex-column">  
            <div className="d-md-none d-lg-block b-sidebar b-nav">
            {formattedLinks.map((link, index) => (
        <Link
          key={index}
          to={`/Barz/${link}`} // Use the formatted link
          className={`nav-links list-group-item nav-item d-flex flex-row justify-content-left align-middle text-nowrap py-3 pe-3 ${pathname.includes(link) && "active"}`}>
          <FontAwesomeIcon className="fa-sm align-self-center px-4" icon={icons[index]} />
          {links[index]}
        </Link>
      ))}
            </div>
        </div> 
    )
}

export default  NavBarVer;