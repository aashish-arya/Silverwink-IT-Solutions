import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';
import DashboardSidebar from '../components/DashboardSidebar';
import PageWrapper from '../components/PageWrapper.jsx'
const Dashboard = () => {


    return (
        <div>
            <PageWrapper>
                <DashboardNav />
                <div className=" h-[calc(100vh-64px)] flex">
                    <DashboardSidebar />
                    <div className="flex-1 overflow-y-auto bg-gray-100 p-">
                        <Outlet />
                    </div>
                </div>


            </PageWrapper>
        </div>
    );
};

export default Dashboard;
