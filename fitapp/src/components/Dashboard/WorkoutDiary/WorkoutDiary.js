import React, { useState } from 'react';
import '../WorkoutDiary/style/workoutdiary.css'
import Header from './Header';
import Workoutlist from '../WorkoutDiary/workoutlist/Workoutlist.js'
import WorkoutItem from './workoutlist/WorkoutItem'
import CreateWorkoutBlock from '../WorkoutDiary/input/CreateWorkoutBlock';
import { ID } from './helpers/id';
const WorkoutDiary = () => {
    const [exercises, setExercises] = useState([])


    const createWorkoutSession = (name, reps, date) => {
        const newWorkoutSession = { id: ID(), name, reps, date };
        const newState = [...exercises];

        newState.push(newWorkoutSession);

        setExercises(newState);
    };
    const deleteItemHandler = id => {
        const newExercises = exercises.filter(ex => ex.id !== id);
        setExercises(newExercises);
    };
    const calculateProgress = (name, id) => {
        const currentExercises = exercises.filter(
            exercise => exercise.name === name
        );

        const index = currentExercises.findIndex(e => e.id === id);

        if (index) {
            const previousExercise = currentExercises[index - 1];
            const currentExercise = currentExercises[index];
            const repsImprovements = currentExercise.reps - previousExercise.reps;

            return Math.round((+repsImprovements / +previousExercise.reps) * 100);
        }
    };
    return (
        <div className="container">
            <Header />
            <CreateWorkoutBlock onCreateWorkout={createWorkoutSession} />
            <Workoutlist>
                {
                    exercises.map(({ id, name, reps, date }) => (
                        <WorkoutItem
                            key={id}
                            id={id}
                            progress={calculateProgress(name, id)}
                            name={name}
                            reps={reps}
                            date={date}
                            onDelete={deleteItemHandler}
                        />
                    ))
                }
            </Workoutlist>
        </div>


    );
};

export default WorkoutDiary;
