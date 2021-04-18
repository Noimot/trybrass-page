import React from 'react'
import { Button } from '../HomeNavBar'
import img from './svgexport-5.png'
import img1 from './svgexport-4.png'
import './index.css'
import { Link } from 'react-router-dom'


const BrassChart = () => {
    return (
        <section className='brass-chart-info'>
            <div className='account-info'>
                <p className='bank-better'>BANK BETTER</p>
                <h1>Made for business <br /> current account .</h1>
                <p>Powerful yet simple. Great human support.<br /> Open an account in <span className='span-color'>10 minutes!</span></p>
                <div className='button-and-tel-container'>
                    <Link to='/login'><Button /></Link>
                    <p> <span><img src={img1} alt='check box' /></span>If you need any help, call +234-1-700-1760</p>
                </div>
            </div>

            <div className='trybrass-chart'>
                <img src={img} alt='trybrass account chart' />
            </div>

        </section>
    )
}

export default BrassChart;