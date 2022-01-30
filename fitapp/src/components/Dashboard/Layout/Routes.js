import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Customers from '../Customers'
import dashboardContent from '../dashboardContent'
import Profile from '../Profile/Profile'
const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' component={dashboardContent}></Route>
            <Route path='/customers' component={Customers}></Route>
            <Route path='/profile' component={Profile}></Route>
        </Switch>
    )
}

export default Routes
