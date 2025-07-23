import React, { useState } from 'react'
import { MdDashboard, MdPayments, MdWork, } from "react-icons/md";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Toggle Button - only on mobile */}
            <div className={`md:hidden ${open ? "hidden" : ""} fixed top-3 right-4 z-50`}>
                <button
                    onClick={() => {
                        setOpen(!open)
                        console.log(open)
                    }}
                    className="text-2xl text-orange-500 bg-white p-2 rounded shadow"
                >
                    <FiMenu />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`bg-gray-200 border-r text-black fixed md:static top-16 right-0 z-40
  h-[calc(100vh-64px)] sm:w-[50%] md:w-[30%] xl:w-[20%]
  transition-transform duration-300 ease-in-out
  ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
            >


                <ul className="flex flex-col justify-start space-y-6 py-5 px-4 mt-10 md:mt-0">

                    <NavLink to={'/dashboard/main'} > <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                    >
                        <span><MdDashboard /></span> Dashboard
                    </li>
                    </NavLink>

                    <NavLink to={'/dashboard/employee'}>  <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                    >
                        <span><FaUsers /></span> Employee Management
                    </li>
                    </NavLink>
                    <NavLink to={'/dashboard/payroll'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><MdPayments /></span> Payroll & Finance
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/recuritment'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><MdWork /></span> Recruitment
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/events'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><FaCalendarAlt /></span>Events & HR Timeline
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/letter'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><FaFileAlt /></span>Letters & Documents
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/reports'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><FaChartBar /></span>Reports & Analytics
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/setting'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><IoMdSettings /></span>Settings
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/myaccount'}>
                        <li className="hover:cursor-pointer flex items-center gap-3 text-lg px-2 py-2 hover:bg-orange-600 rounded-md transition"
                        >
                            <span><FaUserCircle /></span>My Account
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
};

export default DashboardSidebar;
