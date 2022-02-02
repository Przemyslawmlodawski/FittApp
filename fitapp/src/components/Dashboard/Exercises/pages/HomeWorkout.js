import React, { useEffect } from 'react';
import StatusCard from '../../cards/StatusCard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchExercises, dispatchGetExercises } from '../../../../redux/actions/exerciseAction'
import '../../../../assets/css/index.css'
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { ID } from '../../WorkoutDiary/helpers/id';
const HomeWorkout = () => {
    const initialState = {
        name: '',
        reps: '',
        description: '',
        avatar: '',
        status: '',
    }
    const [buttonPopup, setButtonPopup] = useState(false)
    const [popup, setPopup] = useState(initialState)
    const exercises = useSelector(state => state.exercisesReducer)
    console.log(exercises)
    const dispatch = useDispatch();
    useEffect(() => {
        return fetchExercises().then(res => {
            dispatch(dispatchGetExercises(res))
        })
    }, [dispatch])
    const handlePopup = (item) => {
        setButtonPopup(true)

        setPopup({ name: item.name, reps: item.reps, description: item.description, avatar: item.avatar, status: item.status })
    }

    return (
        <>
            <div>
                {
                    exercises.map((item, index) => {


                        if (item.category === "Home Workout") {
                            return <div onClick={() => handlePopup(item)}>
                                <StatusCard
                                    icon='fas fa-dumbbell'
                                    title={item.name}
                                    count={item.reps}

                                />
                            </div >
                        }

                    })
                }
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                <h1>{popup.name}</h1>
                <img width={600} height={500} src={popup.avatar} alt="" />
                <h3>Jak Wykonac</h3>
                <article>{popup.description}</article>
                <h3>Ilość powtórzeń</h3>
                <article>{popup.reps}</article>
                <h3>Poziom Trudności</h3>
                <h4>{popup.status}</h4>
            </Popup >

        </>




    );
};

export default HomeWorkout;
