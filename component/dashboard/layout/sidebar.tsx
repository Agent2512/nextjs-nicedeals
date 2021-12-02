import { BagCheckFill, PersonFill, Speedometer } from "react-bootstrap-icons"


const Sidebar = () => {

    return (
        <div className="sidebar bg-dark collapse collapse-horizontal" id="collapseSidebar">
            <ul className="nav flex-column">
                <li className="nav-item fs-5 me-3">
                    <a href="#" className="nav-link text-white-50">
                        <Speedometer className="me-2" />
                        dashboard
                    </a>
                </li>

                <li className="nav-item fs-5 me-3">
                    <a href="#" className="nav-link text-white-50">
                        <PersonFill className="me-2" />
                        Min konto
                    </a>
                </li>

                <li className="nav-item fs-5 me-3">
                    <a href="#" className="nav-link text-white-50">
                        <BagCheckFill className="me-2" />
                        Mine deals
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;