export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = () => ({
    type: REQUEST_USERS,
});
export const receiveUsers = json => ({
    type: RECEIVE_USERS,
    json: json,
});