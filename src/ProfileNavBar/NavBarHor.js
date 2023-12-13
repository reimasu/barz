import { Link, useLocation } from "react-router-dom";
import { faHouse, faMagnifyingGlass, faBell, faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBarHor() {
    const icons = [, , faUserCircle]; 

    const links = ["Feed", "Search", ""]; 

    const { pathname } = useLocation(); 
    

    return (
        <div className="d-flex justify-content-end align-items-center py-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Barz/${link}`}
                    className={`nav-links list-group-item nav-item d-flex align-items-center text-nowrap px-3 ${pathname.includes(link) && "active"}`}>
                    <FontAwesomeIcon className="me-2" icon={icons[index]} size="2x" />
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default  NavBarHor;