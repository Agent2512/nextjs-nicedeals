import { Cart as CartIcon, List as ListIcon } from "react-bootstrap-icons"
import Link from 'next/link'


const Header = () => {


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
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Tilmeld nyhedsbrev</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="http://localhost/code/nicedeals/opret-profil">Opret profil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="http://localhost/code/nicedeals/login">Log ind</a>
                        </li>
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