import {ERROR, errorActions, RECEIVE_USERS, receiveUsers, REQUEST_USERS} from "../../src/actions";
import {requestUsers} from '../../src/actions'

describe('actions', () => {
    it ('should create an action to make request to get users', () => {
        const expectedAction = {
            type: REQUEST_USERS
        };
        expect(requestUsers()).toEqual(expectedAction)
    }) ;
});

describe('actions', () => {
    it ('should create an action to receive users', () => {
        const expectedAction = {
            type: RECEIVE_USERS,
            users: {'name':'faroque'}
        };
        expect(receiveUsers({'name':'faroque'})).toEqual(expectedAction)
    }) ;
});

describe('actions', () => {
    it ('should create an action for error handling', () => {
        const expectedAction = {
            type: ERROR,
            data: 'something went wrong'
        };
        expect(errorActions('something went wrong')).toEqual(expectedAction)
    }) ;
});