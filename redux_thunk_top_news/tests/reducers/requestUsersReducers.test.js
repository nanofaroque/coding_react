import receiveUsersReducer from "../../src/reducers/receiveUsersReducer";
import requestUserReducer from "../../src/reducers/requestUserReducer";
import {REQUEST_USERS} from "../../src/actions";

const initialState = {
    users: [],
    isFetching: false,
    isError: false
};

describe('request users reducer',()=>{
    it('should return the intial state of the store when nothing has passed', () => {
        expect(receiveUsersReducer(undefined, {})).toEqual(
            {
                users: [],
                isFetching: false,
                isError: false
            })
    });

    it('should change the initial state when request user action dispatched', ()=>{
        expect(requestUserReducer(initialState,{
            type: REQUEST_USERS
        })).toEqual({users: [],
            isFetching: true,
            isError: false})
    })
});