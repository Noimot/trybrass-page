import React, { useEffect } from 'react'
import complaintAction from '../../redux/action/complaintsAction'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'

const Complaints = () => {

    const dispatch = useDispatch();
    const complaintStore = useSelector(({ complaintReducer }) => complaintReducer)
    console.log(complaintStore)
    useEffect(() => {
        dispatch(complaintAction())
    }, [dispatch])


    return (
        <div className='complaint-container'>
            {complaintStore.getComplaints.map((complaints) => {
                return <div key={complaints.id} className='complaints'>{complaints.summary}</div>
            })}

        </div>
    )
}

export default Complaints;