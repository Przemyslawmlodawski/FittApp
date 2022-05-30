import React from 'react';
import './Water.css'
import { Button2 } from '../../ButtonElements'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
const Water = () => {
    const auth = useSelector(state => state.authReducer)
    const token = useSelector(state => state.tokenReducer)
    const { user } = auth
    console.log(user)
    const [water, setWater] = useState(user.visits)
    const handleWater = () => {
        setWater(water + 1)
        try {
            axios.patch('/user/updateWater', {
                visits: water
            }, {
                headers: { Authorization: token }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="container_box">
            <div className="box">
                <div className="wave lightblue">

                </div>

            </div>

            <div className="hilt">
                <div className="handle"></div>
            </div>
            <Button2 onClick={handleWater} primary='true' dark='true'>Napij się</Button2>
        </div>



    );
};

export default Water;
