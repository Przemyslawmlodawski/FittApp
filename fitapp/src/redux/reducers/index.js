import { combineReducers } from 'redux'

import authReducer from './authReducer'
import tokenReducer from './tokenReducer'
import users from './userReducer'
import exercisesReducer from './exerciseReducer'
export default combineReducers({
    authReducer,
    tokenReducer,
    users,
    exercisesReducer
})