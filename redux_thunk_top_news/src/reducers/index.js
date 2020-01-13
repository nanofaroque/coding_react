import {combineReducers} from "redux";
import selectChannelReducer from "./selectChannleReducer";
import requestUserReducer from "./requestUserReducer";
import receiveUsersReducer from "./receiveUsersReducer";

export default combineReducers(
    {
        select: selectChannelReducer,
        request: requestUserReducer,
        receive: receiveUsersReducer
    }
)