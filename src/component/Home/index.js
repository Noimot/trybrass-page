import React from 'react'
import BrassChart from '../BrassAccountChart'
import { DisplayAdvert } from '../DisplayAdvert'
import { HomeNavBar } from '../HomeNavBar'



const Home = () => {
    return (
        <div>
            <HomeNavBar />
            <DisplayAdvert />
            <BrassChart />
        </div>
    )
}

export default Home;