import {ADD_QUESTION, ADD_VOTE, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION :
            const { question } = action
            return {
                ...state,[question.id]:question,
            }
        case ADD_VOTE:
            const {authedUser,qid,answer} = action.vote
            let theOtherOption = answer === "optionOne"? "optionTwo":"optionOne"
           return {
               ...state,
               [qid]: {
                   ...state[qid],
                   [answer]: {
                       ...state[qid][answer],
                       votes: state[qid][answer].votes.concat([authedUser])
                   },
                   [theOtherOption]: {
                       ...state[qid][theOtherOption],
                       votes: state[qid][theOtherOption].votes.filter(id=>id!==authedUser)
                   }

               }
           }
        default :
            return state
    }
}
