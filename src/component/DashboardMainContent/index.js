import React from 'react'
// import { FinancialUpdate } from './account-balance'
import './index.css'

const DashboardContent = () => {
    return (
        <div className='content-wrapper'>
            <section className='content-container'>
                <section className='content-display'>


                    <div className='account-income'>
                        <p>Total Income</p>
                        <h1>$579,000</h1>
                        <p>Saved 25%</p>
                    </div>
                    <div className='account-expenses'>
                        <p>Total Expenses</p>
                        <h1>$79,000</h1>
                        <p>Saved 25%</p>
                    </div>
                    <div className='account-cash'>
                        <p>Cash on Hand</p>
                        <h1>$92,000</h1>
                        <p>Saved 25%</p>
                    </div>
                    <div className='account-margin'>
                        <p>Net Profit Margin</p>
                        <h1>$179,000</h1>
                        <p>Saved 65%</p>
                    </div>
                </section>



            </section>
        </div>

    )
}

export default DashboardContent;