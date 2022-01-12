import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Customers from '../Customers'
import dashboardContent from '../dashboardContent'
const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' component={dashboardContent}></Route>
            <Route path='/customers' component={Customers}></Route>
        </Switch>
    )
}

export default Routes
