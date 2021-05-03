import {RECEIVE_DATA} from "../actions/users";

export default function users (state = [], action) {
        switch(action.type) {
            case RECEIVE_DATA :
                console.log(state,action)
                return action.users
            default :
                return state
        }
}
