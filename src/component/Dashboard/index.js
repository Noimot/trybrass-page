import React from 'react'
import { HomeNavBar } from '../HomeNavBar'
import Sidebar from '../DashboardSidebar'
import DashboardContent from '../DashboardMainContent'
import './index.css'
 
const Dashboard = () => {
    return (
        <div className='dashboard-styling'>
            <HomeNavBar />
            <div className='dashboard-flex-display'>
                <Sidebar />
                <DashboardContent />
            </div>
           
        </div>
    )
}

export default Dashboard;