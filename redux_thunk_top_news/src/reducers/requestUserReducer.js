import {REQUEST_USERS} from "../actions";
const initialState = {
    users: {},
    isFetching: false,
    isError: false
};
const requestUserReducer = (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                isFetching: true,
                users: {}
            };
        default:
            return state;
    }
};
export default requestUserReducer;