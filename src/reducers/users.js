import {RECEIVE_DATA} from "../actions/users";
import {ADD_QUESTION, ADD_VOTE} from "../actions/questions";

export default function users (state = [], action) {
        switch(action.type) {
            case RECEIVE_DATA :
                console.log(state,action)
                return action.users
            case ADD_QUESTION :
                const { id,author } = action.question

                return {
                    ...state,
                    [author]:{
                        ...state[author],
                        questions:state[author].questions.concat([id])
                    }
                }
            case ADD_VOTE:
                const {authedUser,qid,answer} = action.vote
                console.log("inside the users reducers,,,,",state,state[authedUser])

                return {
                    ...state,
                    [authedUser]: {
                        ...state[authedUser],
                        answers: {
                            ...state[authedUser].answers,
                            [qid]: answer
                        }
                    }
                }
            default :
                return state
        }
}
