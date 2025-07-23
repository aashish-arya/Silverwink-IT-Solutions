import React, { useState } from 'react'
import { MdDashboard, MdPayments, MdWork, } from "react-icons/md";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaUserCircle } from "react-icons/fa";
import sidebackground from '../assets/sidebackground.jpg'
import { IoMdSettings } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
    { to: "/dashboard/main", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/dashboard/employee", label: "Employee Management", icon: <FaUsers /> },
    { to: "/dashboard/payroll", label: "Payroll & Finance", icon: <MdPayments /> },
    { to: "/dashboard/recuritment", label: "Recruitment", icon: <MdWork /> },
    { to: "/dashboard/events", label: "Events & HR Timeline", icon: <FaCalendarAlt /> },
    { to: "/dashboard/letter", label: "Letters & Documents", icon: <FaFileAlt /> },
    { to: "/dashboard/reports", label: "Reports & Analytics", icon: <FaChartBar /> },
    { to: "/dashboard/setting", label: "Settings", icon: <IoMdSettings /> },
    { to: "/dashboard/myaccount", label: "My Account", icon: <FaUserCircle /> },
];


const DashboardSidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Toggle Button - only on mobile */}
            <div className={`md:hidden fixed top-3 right-4 z-50`}>
                {open ?
                    <button
                        onClick={() => {
                            setOpen(!open)
                            console.log(open)
                        }}
                        className="text-2xl text-orange-500 bg-white p-2 rounded shadow"
                    >
                        <MdClose />
                    </button> :
                    <button
                        onClick={() => {
                            setOpen(!open)
                        }}
                        className="text-2xl text-orange-500 bg-white p-2 rounded shadow"
                    >
                        <FiMenu />

                    </button>
                }

            </div>

            {/* Sidebar */}
            <div
                className={`bg-gray-200 border-r text-black bg-cover  fixed md:static top-16 right-0 z-40 h-[calc(100vh-64px)] sm:w-[50%] md:w-[30%] xl:w-[20%] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
            // style={{ backgroundImage: `url(${sidebackground}) ` }}

            >
                <ul className="flex flex-col justify-start space-y-3 md:space-y-6 pt-0 md:pt-5 px-4 mt-10 md:mt-0">
                    {sidebarLinks.map((item, index) => (
                        <NavLink to={item.to} key={index} onClick={() => setOpen(false)}>
                            <li className="flex items-center gap-3 text-lg px-2 py-2 rounded-md hover:bg-gray-600 hover:cursor-pointer transition">
                                <span>{item.icon}</span> {item.label}
                            </li>
                        </NavLink>
                    ))}
                </ul>

            </div>
        </>
    );
};

export default DashboardSidebar;
