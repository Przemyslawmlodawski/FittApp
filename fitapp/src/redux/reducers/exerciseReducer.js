import ACTIONS from '../actions/'

const exercises = []

const exercisesReducer = (state = exercises, action) => {
    switch (action.type) {
        case ACTIONS.GET_EXERCISE:
            return action.payload
        default:
            return state
    }
}

export default exercisesReducer