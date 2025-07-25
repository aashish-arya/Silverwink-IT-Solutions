import React from 'react'
import PageWrapper from './PageWrapper.jsx'
import NavMenu from './NavMenu.jsx';
import { Outlet } from 'react-router-dom';



const DashboardHero = () => {
  return (
    <PageWrapper>
      <div className='w-full bg-[#141b2d] h-[200vh] py-4 px-10'>
        This is Dashboard
        <br />
        graphs\<br />
        pie charts etc
      </div>
    </PageWrapper>
  )
}

export default DashboardHero
