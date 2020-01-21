import {RECEIVE_USERS} from "../actions";
const initialState = {
    users: [],
    isFetching: false,
    isError: false
};
const receiveUsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                users: state.users.concat(action.users)
            };
        default:
            return state;
    }
};
export default receiveUsersReducer;