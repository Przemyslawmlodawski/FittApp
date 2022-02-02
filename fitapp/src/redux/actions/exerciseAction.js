import ACTIONS from './index'
import axios from 'axios'

export const fetchExercises = async () => {
    const res = await axios.get('/exercise/allExercises', {})
    return res
}

export const dispatchGetExercises = (res) => {
    return {
        type: ACTIONS.GET_EXERCISE,
        payload: res.data
    }
}