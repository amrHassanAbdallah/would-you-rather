import {_getQuestions, _getUsers} from "../_DATA";
import {RECEIVE_DATA} from "./users";
import {receiveQuestions} from "./questions";
import {hideLoading, showLoading} from "react-redux-loading";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        Promise.all([
            _getUsers(),
            _getQuestions(),
        ]).then(([users,questions]) => {
            dispatch(hideLoading())
            dispatch(receiveDataAction(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function receiveDataAction(users) {
    return {
        type: RECEIVE_DATA,
        users,
    };
}

