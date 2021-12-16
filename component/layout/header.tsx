import { Cart as CartIcon, List as ListIcon } from "react-bootstrap-icons"
import Link from 'next/link'
import { useUser } from "../../hooks/userUser"


const Header = () => {
    const { logout, user } = useUser()

    return (
        <header className="sticky-top" >
            <div className="bg-secondary" >
                <div className="container d-flex justify-content-between align-items-center">
                    <Link href="/">
                        <a className="navbar-brand text-white fs-2">Nicedeals</a>
                    </Link>

                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <ListIcon className="text-white" />
                    </button>

                    <ul className="nav">
                        {user ? <>
                            <li className="nav-item">
                                <Link href="/dashboard">
                                    <a className="nav-link text-white">{user.username}</a>
                                </Link>
                            </li>

                            <button className="nav-link text-white border-0 bg-transparent" onClick={logout} >
                                logout
                            </button>
                        </> : <>
                            <li className="nav-item">
                                <Link href="/signup">
                                    <a className="nav-link text-white">Opret profil</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link text-white">Log ind</a>
                                </Link>
                            </li>
                        </>
                        }

                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link text-white" href="#">
                                <CartIcon />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>




            <nav className="navbar navbar-expand-lg menu-bg menu bg-info">
                <div className="container">
                    <div className="collapse navbar-collapse" id="collapseExample">
                        <ul className="navbar-nav d-flex justify-content-between w-100">
                            <li className="nav-item">
                                <Link href="/ophold">
                                    <a className="nav-link">Ophold</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/rejser">
                                    <a className="nav-link">Rejser</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/mad-og-vin">
                                    <a className="nav-link">Mad og vin</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/produkter">
                                    <a className="nav-link">Produkter</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/sidste-chance">
                                    <a className="nav-link" href="sidste-chance">Sidste chance</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/gavekort">
                                    <a className="nav-link" href="gavekort">Gavekort</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header