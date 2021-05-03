import { combineReducers } from 'redux'
import authedUser from './user'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'
import questions from "./questions";

export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer,
    questions
})
