import {USER_LOGIN, USER_LOGOUT} from "../actions/user";

export default function user (state = null, action) {
    switch(action.type) {
        case USER_LOGIN :
            return action.user_id
        case USER_LOGOUT:
            return  null
        default :
            return state
    }
}
