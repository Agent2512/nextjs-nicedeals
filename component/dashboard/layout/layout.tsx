import Header from "./header"
import Sidebar from "./sidebar"

interface Props {
    children: React.ReactNode
}


const DashboardLayout = (props: Props) => {


    return (
        <div id="DashboardLayout">
            <Header />
            <Sidebar />
            {props.children}
        </div>
    )
}

export default DashboardLayout