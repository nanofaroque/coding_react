import {RECEIVE_USERS} from "../actions";
const initialState = {
    users: {},
    isFetching: false,
    isError: false
};
const receiveUsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                users: action.users,
                isFetching: false,
                isError: false
            };
        default:
            return state;
    }
};
export default receiveUsersReducer;