import {_saveQuestion} from "../_DATA";
import {hideLoading, showLoading} from "react-redux-loading";


export  const ADD_QUESTION = "ADD_QUESTION"

export function addQuestion( question){
    return {
        type: ADD_QUESTION,
        question
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
