import { combineReducers } from 'redux'
import authedUser from './user'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer
})
