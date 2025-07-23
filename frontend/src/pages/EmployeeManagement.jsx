import React from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
const EmployeeManagement = () => {
  return (
    <PageWrapper>
      <div>
        <div className='bg-gray-500 w-full h-[200vh] py-4 px-10'>
          <nav className='text-white'>
            <ul d>
              <li>All Employees</li>
              <li>Add New Employee</li>
              <li>Departments</li>
              <li>Attendance</li>
              <li>Leave Management</li>
            </ul>
          </nav>
        </div>

      </div>
    </PageWrapper>
  )
}

export default EmployeeManagement
