import React from 'react'
import Sidebar from '../DashboardSidebar'
import { HomeNavBar } from '../HomeNavBar'
import Complaints from '../ComplaintContent'
import './index.css'


const ComplaintPage = () => {
    return (
        <div>
            <HomeNavBar />
            <div className='complaints-display'>
                <Sidebar />
                <Complaints />
            </div>

        </div>
    )
}

export default ComplaintPage;