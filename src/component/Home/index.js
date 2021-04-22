import React from 'react'
import BrassChart from '../BrassAccountChart'
import { DisplayAdvert } from '../DisplayAdvert'
import { HomeNavBar, Button } from '../HomeNavBar'



const Home = () => {
    return (
        <div>
            <HomeNavBar sideNav={<Button />}/>
            <DisplayAdvert />
            <BrassChart />
        </div>
    )
}

export default Home;