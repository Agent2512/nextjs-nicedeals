import DashboardLayout from "../../component/dashboard/layout/layout";
import { UserInfo } from "../../component/dashboard/userInfo";


const Dashboard = () => {
    return (
        <DashboardLayout>
            <main className="main container-fluid px-4">
                <h1 className="mt-3">Dashboard</h1>
                <div className="row">
                    <div className="col-xl-6">
                        <UserInfo noButtons />





                    </div>
                    <div className="col-xl-6">

                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Dashboard;