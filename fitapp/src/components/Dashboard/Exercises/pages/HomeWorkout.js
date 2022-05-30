import React, { useEffect } from 'react';
import StatusCard from '../../cards/StatusCard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchExercises, dispatchGetExercises } from '../../../../redux/actions/exerciseAction'
import '../../../../assets/css/index.css'
import Popup from '../Popup/Popup';
import { useState } from 'react';

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
    const homeworkout = []
    const exercises = useSelector(state => state.exercisesReducer)
    exercises.map((item, index) => {
        if (item.category == "Home Workout") homeworkout.push(item)
    })

    const initDataShow = homeworkout && homeworkout ? homeworkout.slice(0, Number(4)) : homeworkout
    const [dataShow, setDataShow] = useState(initDataShow)
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

    const [currPage, setCurrPage] = useState(0);
    let pages = 1;
    let range = [];

    if (4 !== undefined) {
        let page = Math.floor(homeworkout.length / Number(4))
        pages = homeworkout.length % Number(4) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }
    const selectPage = page => {
        const start = Number(4) * page
        const end = start + Number(4)

        setDataShow(homeworkout.slice(start, end))

        console.log(dataShow)
        setCurrPage(page)
    }

    return (
        <>
            <div>
                {
                    dataShow.map((item, index) => {


                        if (item.category === "Home Workout") {
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
                <img width={600} height={600} src={popup.avatar} alt="" />
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

export default HomeWorkout;
