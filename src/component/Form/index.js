import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { LoginData } from './../../redux/action/loginAction'
import { useDispatch, useSelector } from 'react-redux'



const Form = () => {

    const dispatch = useDispatch()

    const userStore = useSelector(({ loginUserReducer }) => loginUserReducer)

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        type: 'admin'
    })

    const [formErrors, setformErrors] = useState(false)


    useEffect(() => {
        if (userStore.loginSuccess) {
            window.location.href = '/dashboard'
        }
    }, [userStore.loginSuccess])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({ ...userInfo, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(false)
        if (userInfo.username.trim() === '' || userInfo.password.trim() === '') {
            setformErrors(true)
        }

        dispatch(LoginData({
            type: userInfo.type,
            username: userInfo.username,
            password: userInfo.password
        }))

    }

    return (
        <div className='form-container'>
            <h1>Log in to your account</h1>
            <form className="login-form">
                {formErrors ? (<div className='inputValidation'>enter valid username or password</div>) : ('')}
                <input type='text' name='username' value={userInfo.username} placeholder='Enter username' onChange={handleChange} />
                <input className='input-position' type='password' name='password' value={userInfo.password} placeholder='Enter password' onChange={handleChange} />
                <div className='user-type'>
                    User type: <select name="type" onChange={handleChange}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Log me in</button>
                <div>{userStore.loginError && <p style={{ color: 'red' }}>only admin can login</p>}</div>

            </form>
            <p>Forgot your password? <Link to='#'>Reset it here</Link></p>
        </div>
    )
}




export default Form;