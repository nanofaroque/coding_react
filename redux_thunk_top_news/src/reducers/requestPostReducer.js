import {REQUEST_POSTS} from "../actions";

const requestPostReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                json: action.json,
                loading: false
            };
        default:
            return state;
    }
};
export default requestPostReducer;