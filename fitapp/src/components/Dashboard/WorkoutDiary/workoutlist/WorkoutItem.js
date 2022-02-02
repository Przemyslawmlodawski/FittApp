import React from 'react';
import '../style/workoutitem.css'
const WorkoutItem = ({ name, reps, id, date, onDelete, progress }) => {
    return (
        <li>
            <div className="workout-item">
                <span className='workout-item__name'>{name}</span>
                <span
                    className={`workout-item__count ${progress ? (progress > 0 && "up") || "down" : ""
                        }`}
                >
                    {reps} reps
                    {progress ? (progress > 0 && ` ${progress}%↑`) || ` ${progress}%↓` : ""}
                </span>

                <span className='workout-item__date'>{date}</span>
                <span className='cross' onClick={() => onDelete(id)}>X</span>
            </div>
        </li>

    );
};

export default WorkoutItem;
