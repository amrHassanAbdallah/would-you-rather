import {_saveQuestion, _saveQuestionAnswer} from "../_DATA";
import {hideLoading, showLoading} from "react-redux-loading";


export  const ADD_QUESTION = "ADD_QUESTION"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE = 'ADD_VOTE'
export function addQuestion( question){
    return {
        type: ADD_QUESTION,
        question
    }
}
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addVote (vote) {
    return {
        type: ADD_VOTE,
        vote,
    }
}
export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser,users } = getState()
        if (authedUser == null){
            alert("you need to login in order to create question")
            return
        }
        dispatch(showLoading())
        console.log(authedUser,users[authedUser])
        return _saveQuestion({optionOneText,optionTwoText,author:authedUser})
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}
export function handleAddVote (questionID, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        if (authedUser == null){
            alert("you need to login in order to vote a question")
            return
        }
        dispatch(showLoading())
        return _saveQuestionAnswer({authedUser,qid:questionID,answer:option})
            .then(() => {
                dispatch(addVote({authedUser,qid:questionID,answer:option}))
                dispatch(hideLoading())
            })
    }
}
