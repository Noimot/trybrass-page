import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../component/PageNotFound'
import Home from '../component/Home'
import Login from '../component/Login'
import Dashboard from '../component/Dashboard'
import ComplaintPage from '../component/ComplaintPage'

const Routes = () => (
  
        <Switch>
            <Route exact path='/userComplaints' component={ComplaintPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login'component={Login} />
            <Route exact path='/' component={Home} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    
)

export default Routes;