import React, { useState } from 'react'
import './statuscard.css'
import Badge from '../Badge/Badge'


const StatusCard = (props) => {
    const orderStatus = {

        "Średni": "warning",
        "Łatwy": "success",
        "Trudny": "danger"
    }

    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
            {
                props.status ? <div className="status-card__info">
                    <h4><Badge type={orderStatus[props.status]} content={props.status} /></h4>
                </div> : ""
            }


        </div>
    )
}

export default StatusCard
