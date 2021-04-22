import React from 'react'
import styled from 'styled-components'
import img3 from './svgexport-1.png'
import './index.css'
import { Link } from 'react-router-dom'
// import Logo  from './logo.js'


const NavButton = styled.button`
    background: #3e7eee;
    color: #fff;
    padding: 0.5rem 1.4rem;
    border-radius: 5px;
    border:none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
`;


export const NavbarLogo = () => {
    return (
        <div>
            <img src={img3} alt='trybrass logo'/>
            {/* <Logo /> */}
        </div>
    )
}

export const Button = () => {
    return (
        <NavButton>
            Login
        </NavButton>
    )
}

export const HomeNavBar = ({sideNav}) => {
    return (
        <div className='navbar-flex'>
           <div><Link to='/'><NavbarLogo /></Link></div> 
            <div><Link to='/login'>{sideNav}</Link></div>
        </div>
    )
}

