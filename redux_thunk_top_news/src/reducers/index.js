import {combineReducers} from "redux";
import requestUserReducer from "./requestUserReducer";
import receiveUsersReducer from "./receiveUsersReducer";

const rootReducer= combineReducers(
    {
        requestUsers: requestUserReducer,
        receiveUsers: receiveUsersReducer
    }
)
export default rootReducer;