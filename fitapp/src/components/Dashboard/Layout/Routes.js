import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Customers from '../Customers'
import dashboardContent from '../DashboardContent'
import Exercise from '../Exercises/Exercise'
import Profile from '../Profile/Profile'
import WorkoutDiary from '../WorkoutDiary/WorkoutDiary'
const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' component={dashboardContent}></Route>
            <Route path='/exercises' component={Exercise}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/workoutdiary' component={WorkoutDiary}></Route>
        </Switch>
    )
}

export default Routes
