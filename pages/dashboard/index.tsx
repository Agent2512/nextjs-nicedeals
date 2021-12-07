import { useEffect } from "react";
import { useState } from "react";
import DashboardLayout from "../../component/dashboard/layout/layout";
import { useApi } from "../../hooks/useApi";
import { useUser } from "../../hooks/userUser";
import { userRouteRes } from "../api/user";


const Dashboard = () => {
    const { user, isLoggedIn, logout } = useUser()


    return (
        <DashboardLayout>
            <main className="main">
                <p>test</p>
                <pre>
                    {JSON.stringify({ user, isLoggedIn }, null, 2)}
                </pre>
                <button onClick={logout} className="btn btn-primary" >logout</button>
            </main>
        </DashboardLayout>
    )
}

export default Dashboard;