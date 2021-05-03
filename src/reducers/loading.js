import {RECEIVE_DATA} from "../actions/users";

export default function users (state = true, action) {
        switch(action.type) {
            case RECEIVE_DATA :
                return false
            default :
                return state
        }


}
