import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Sidebar = () => {
    return (
        <div>
            <section className='dashboard-sidebar'>
                <div><Link to='/dashboard'>Dashboard</Link></div>
                <div><Link to='/userComplaints'>Complaints</Link></div>
                <div>User info</div>
            </section>

        </div>
    )
}

export default Sidebar;