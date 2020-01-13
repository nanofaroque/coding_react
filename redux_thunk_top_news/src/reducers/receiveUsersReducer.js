import {RECEIVE_USERS} from "../actions";

const receiveUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                users: action.json,
                loading: false
            };
        default:
            return state;
    }
};
export default receiveUsersReducer;