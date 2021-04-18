import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Form = () => {

const [person, setPerson] = useState ({
    email: '',
    password: ''
})

// const emailRegex = 

const handleChange = (e) => {
    const name= e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]:value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person.email,person.password)
    
    
}

    return (
        <div className='form-container'>
            <h1>Log in to your account</h1>
            <form className="login-form">
                <input type='email' name='email' value={person.email} placeholder='Email Address' onChange={handleChange} />
                <input className='input-position' type='password' name='password' value={person.password} placeholder='Enter password' onChange={handleChange} />
            
                <button onClick={handleSubmit}><Link to='/dashboard'>Log me in</Link></button>
            </form>
            <p>Forgot your password? <Link to='#'>Reset it here</Link></p>
        </div>
    )
}




export default Form;