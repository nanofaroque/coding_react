import {SELECT_CHANNEL} from "../actions";

const selectChannelReducer = (state={},action)=>{
    switch (action.type) {
        case SELECT_CHANNEL:
            return {...state,channel:action.channel};
        default:
            return state;
    }
};
export default selectChannelReducer;