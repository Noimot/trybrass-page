import React, { useEffect } from 'react'
import { HomeNavBar } from '../HomeNavBar'
import Sidebar from '../DashboardSidebar'
import DashboardContent from '../DashboardMainContent'
import './index.css'

const redirect = () => {
    window.location.assign('/login')
}



const Dashboard = () => {
    const token = localStorage.getItem('x-access-token')

    useEffect(() => {
        if (!token) return redirect()
    }, [token])

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