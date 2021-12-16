import { List, PersonFill, Search } from "react-bootstrap-icons";
import { useUser } from "../../../hooks/userUser";


const Header = () => {
    const { logout } = useUser()

    return (
        <nav className="top navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand */}
            <a href="/dashboard" className="navbar-brand ps-3 fs-4 me-5">
                Nicedeals
            </a>
            {/* Sidebar Toggle */}
            <button className="btn btn-dark" data-bs-toggle="collapse" role="button" data-bs-target="#collapseSidebar">
                <List className="fs-5" />
            </button>
            {/* Navbar Search */}
            <form className="d-none d-md-flex ms-auto">
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">
                        <Search className="fs-5" />
                    </button>
                </div>
            </form>
            {/* Navbar */}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <PersonFill className="fs-5" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="http://localhost/code/nicedeals/users/account">Min Konto</a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={ logout }>Logout</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Header;