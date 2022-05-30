import React from 'react';

import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../Exercises/Exercise.css'
import HomeWorkout from './pages/HomeWorkout';
import OutsideWorkout from './pages/OutsideWorkout';
import GymWorkout from './pages/GymWorkout';
import CrossFit from './pages/CrossFit';
const Exercise = () => {
    return (

        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/homeWorkout' exact component={HomeWorkout}></Route>
                    <Route path='/outside' component={OutsideWorkout}></Route>
                    <Route path='/gym' component={GymWorkout}></Route>
                    <Route path='/crossfit' component={CrossFit}></Route>
                </Switch>
            </Router>
        </>

    );
};

export default Exercise;
