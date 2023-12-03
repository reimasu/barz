import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.scss';

function NavBar() {
    const links = ["Home", "Explore", "Notifications", "Lists", "Profile"];
    const { pathname } = useLocation();

    return(
        <div className="d-md-none d-lg-block b-sidebar b-nav">
            {links.map((link, index) => (
                <Link
                 key={index}
                 to={`/Barz/${link}`}
                 className={`list-group-item nav-item d-flex flex-column justify-content-center ${pathname.includes(link) && "active"}`}>
                {link}
                </Link>
            ))}
        </div>
    )
}

export default NavBar;