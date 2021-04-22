import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Form = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [formErrors, setformErrors] = useState({
        email: '',
        password: ''
    })

    const emailvalidate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/gi;
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({ ...userInfo, [name]: value })

        setformErrors(formErrors);
        switch (name) {
            
            case 'email':
                formErrors.email = emailvalidate.test(value) ? 'You entered a valid Email Address' : 'Please enter a valid Email Address';
                break;
            case 'password':
                formErrors.password = value.length === 6 ? '' : 'Password must be 6 characters long';
                break;
            default:
                break;
        }
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo.email, userInfo.password)

    }
   
    return (
        <div className='form-container'>
            <h1>Log in to your account</h1>
            <form className="login-form">
                {formErrors.email && <div className='inputValidation'>{formErrors.email}</div>}
                <input type='email' name='email' value={userInfo.email} placeholder='Email Address' onChange={handleChange} />
                {formErrors.password && <div className='inputValidation'>{formErrors.password}</div>}
                <input className='input-position' type='password' name='password' value={userInfo.password} placeholder='Enter password' onChange={handleChange} />
                <button onClick={handleSubmit}><Link to='/dashboard'>Log me in</Link></button>
            </form>
            <p>Forgot your password? <Link to='#'>Reset it here</Link></p>
        </div>
    )
}




export default Form;