import React from 'react'
import PageWrapper from './PageWrapper.jsx'
import NavMenu from './NavMenu.jsx';
import { Outlet } from 'react-router-dom';

const navItems = [
  { name: "All Employees", path: "all" },
  { name: "Add New Employee", path: "add" },
  { name: "Departments", path: "department" },
  { name: "Attendance", path: "attendance" },
  { name: "Leave Management", path: "leave" },
];

const DashboardHero = () => {
  return (
    <PageWrapper>
      <div className='bg-gray-500 w-full h-[200vh] py-4 px-10'>
        <NavMenu items={navItems} />
        <div>
          <Outlet />
        </div>
      </div>
    </PageWrapper>
  )
}

export default DashboardHero
