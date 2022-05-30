import React from 'react';
import '../style/createWorkoutBlock.css'
const CreateWorkoutBlock = ({ onCreateWorkout }) => {
    const onSubmitHandler = event => {
        event.preventDefault();

        const { name, reps, date } = event.target.elements;

        if (name.value && reps.value && date.value) {
            onCreateWorkout(name.value, reps.value, date.value);
        }

        name.value = "";
        reps.value = "";
        date.value = "";
    };
    return (

        <form onSubmit={onSubmitHandler} className="createWorkout-block">
            <input type="text" placeholder="Nazwa" name="name" />
            <input type="number" placeholder="Pówtórzenia" name="reps" />
            <input type="date" name="date" placeholder='Wybierz Date' />
            <button className="saveButton">Dodaj</button>
        </form>

    );
};

export default CreateWorkoutBlock;
