import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StatusCard from '../../cards/StatusCard';
import Popup from '../Popup/Popup';
const GymWorkout = () => {
    const initialState = {
        name: '',
        reps: '',
        description: '',
        avatar: '',
        status: '',
    }

    const [buttonPopup, setButtonPopup] = useState(false)
    const [popup, setPopup] = useState(initialState)
    const GymWorkout = []
    const exercises = useSelector(state => state.exercisesReducer)
    exercises.map((item, index) => {
        if (item.category == "Gym Workout") GymWorkout.push(item)
    })

    const initDataShow = GymWorkout && GymWorkout ? GymWorkout.slice(0, Number(4)) : GymWorkout
    const [dataShow, setDataShow] = useState(initDataShow)
    console.log(exercises)

    const handlePopup = (item) => {
        setButtonPopup(true)

        setPopup({ name: item.name, reps: item.reps, description: item.description, avatar: item.avatar, status: item.status })
    }

    const [currPage, setCurrPage] = useState(0);
    let pages = 1;
    let range = [];

    if (4 !== undefined) {
        let page = Math.floor(GymWorkout.length / Number(4))
        pages = GymWorkout.length % Number(4) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }
    const selectPage = page => {
        const start = Number(4) * page
        const end = start + Number(4)

        setDataShow(GymWorkout.slice(start, end))

        console.log(dataShow)
        setCurrPage(page)
    }
    return (
        <>
            <div>
                {
                    dataShow.map((item, index) => {


                        if (item.category === "Gym Workout") {
                            return <div onClick={() => handlePopup(item)}>
                                <StatusCard
                                    icon='fas fa-dumbbell'
                                    count={item.name}
                                    status={item.status}


                                />

                            </div >
                        }

                    })
                }
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                <h1>{popup.name}</h1>
                <img width={500} height={500} src={popup.avatar} alt="" />
                <h3>Jak Wykonac</h3>
                <article>{popup.description}</article>
                <h3>Ilość powtórzeń</h3>
                <article>{popup.reps}</article>
                <h3>Poziom Trudności</h3>
                <h4>{popup.status}</h4>
            </Popup >


            <div className="table__pagination">
                {
                    range.map((item, index) => (
                        <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                            {item + 1}
                        </div>
                    ))
                }
            </div>
        </>



    );
};

export default GymWorkout;
