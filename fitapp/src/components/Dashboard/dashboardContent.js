import React, { useEffect, useState } from 'react'
import statusCards from '../../assets/JsonData/status-card-data.json'
import StatusCard from './cards/StatusCard'
import '../../assets/css/index.css'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from './Table/Table'
import Badge from './Badge/Badge'
import { fetchExercises, dispatchGetExercises } from '../../redux/actions/exerciseAction'
import { FaLaughBeam } from 'react-icons/fa'

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

    "Średni": "warning",
    "Łatwy": "success",
    "Trudny": "danger"
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
    const categories = []
    const exercises = useSelector(state => state.exercisesReducer)
    const auth = useSelector(state => state.authReducer)
    exercises.map((item, index) => categories.push(item.category))

    const numberOfCategories = categories.filter((item, index, array) => array.indexOf(item) === index)
    console.log(categories)
    console.log(numberOfCategories.length)
    const { user } = auth
    const [chartUserData, setChartUserData] = useState()
    const [chartExerciseData, setCharExerciseData] = useState()
    const [chartCategoriesData, setCharCategoriesData] = useState()
    console.log(exercises)
    const dispatch = useDispatch();
    useEffect(() => {
        setCharCategoriesData(numberOfCategories.length)
        setChartUserData(user.visits)
        setCharExerciseData(numberOfExercises)
        return fetchExercises().then(res => {
            dispatch(dispatchGetExercises(res))
        })
    }, [dispatch])
    const chartOptions = {

        labels: ["Drunk Water", "Number of Exercise", "Categories"]


    }

    const series = [chartUserData, chartExerciseData, chartCategoriesData]

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
                            <Link to='/exercises'>
                                <StatusCard
                                    icon='fas fa-dumbbell'
                                    count={chartExerciseData}
                                    title="Exercises"
                                />
                            </Link>

                        </div>
                        <div className="col-6" >
                            <Link to='/water'>
                                <StatusCard
                                    icon="fas fa-glass-whiskey"
                                    count={user.visits}
                                    title="Cup Of Water"
                                />

                            </Link>

                        </div>
                        <div className="col-6" >

                            <StatusCard
                                icon="bx bxs-category"
                                count={chartCategoriesData}
                                title="Categories"
                            />



                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={chartOptions}
                            series={series}
                            type="pie"
                            width='100%'
                            height={300}
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
                            <Link to='/exercises'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent