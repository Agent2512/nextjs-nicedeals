import { useEffect } from "react";
import { useState } from "react";
import DashboardLayout from "../../component/dashboard/layout/layout";
import { useApi } from "../../hooks/useApi";
import { userRouteRes } from "../api/user";


const Dashboard = () => {

    return (
        <DashboardLayout>
            <main className="main">
                <p>test</p>
            </main>
        </DashboardLayout>
    )
}

export default Dashboard;