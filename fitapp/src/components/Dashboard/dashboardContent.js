import React, { useEffect } from 'react'
import statusCards from '../../assets/JsonData/status-card-data.json'
import StatusCard from './cards/StatusCard'
import '../../assets/css/index.css'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from './Table/Table'
import Badge from './Badge/Badge'
import { fetchExercises, dispatchGetExercises } from '../../redux/actions/exerciseAction'
const chartOptions = {
    series: [{
        name: 'Online Cutomers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topUsers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderUsersHead = (item, index) => (
    <th key={index}>{item}</th>
)


const renderUsersBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)
const latestOrders = {
    header: [
        "Exercise Name",
        "Reps",
        "Category",
        "status"
    ],

}
const orderStatus = {

    "medium": "warning",
    "easy": "success",
    "hard": "danger"
}
const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const DashboardContent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(ThemeAction.getTheme())
    // })
    const exercises = useSelector(state => state.exercisesReducer)
    console.log(exercises)
    const dispatch = useDispatch();
    useEffect(() => {
        return fetchExercises().then(res => {
            dispatch(dispatchGetExercises(res))
        })
    }, [dispatch])
    const renderOrderBody = (item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.reps}</td>
            <td>{item.category}</td>
            <td><Badge type={orderStatus[item.status]} content={item.status} /></td>
        </tr>
    )
    const numberOfExercises = exercises.length
    return (
        <div>
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">


                        <div className="col-6" >

                            <StatusCard
                                icon='fas fa-dumbbell'
                                count={numberOfExercises}
                                title="Exercises"
                            />

                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>

                <div className="col-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Top Exercises</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={exercises}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                                limit={3}

                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/dashboard/'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent