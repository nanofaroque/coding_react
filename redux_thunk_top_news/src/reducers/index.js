import {combineReducers} from "redux";
import selectChannelReducer from "./selectChannleReducer";
import requestPostReducer from "./requestPostReducer";
import receivePostReducer from "./receivePostReducer";

export default combineReducers(
    {
        select: selectChannelReducer,
        request: requestPostReducer,
        receive: receivePostReducer
    }
)