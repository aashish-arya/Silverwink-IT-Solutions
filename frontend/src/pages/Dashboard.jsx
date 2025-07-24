import { Routes, Route, Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';
import DashboardSidebar from '../components/DashboardSidebar';
const Dashboard = () => {


    return (
        <div>
            <DashboardNav />
            <div className=" h-[calc(100vh-64px)] flex">
                <DashboardSidebar />
                <div className="flex-1  overflow-y-auto bg-gray-100 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
