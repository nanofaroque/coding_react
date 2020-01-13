import {REQUEST_USERS} from "../actions";

const requestUserReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                json: action.json,
                loading: false
            };
        default:
            return state;
    }
};
export default requestUserReducer;