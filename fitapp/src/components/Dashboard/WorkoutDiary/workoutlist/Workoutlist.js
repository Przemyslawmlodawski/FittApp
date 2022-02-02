import React from 'react';
import '../style/workoutlist.css'
const Workoutlist = ({ children }) => {
    return (
        <li>
            <div className="workout-list">
                {children}
            </div>
        </li>
    );
};

export default Workoutlist;
