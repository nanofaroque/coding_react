import {RECEIVE_POSTS} from "../actions";

const receivePostReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                json: action.json,
                loading: false
            };
        default:
            return state;
    }
};
export default receivePostReducer;