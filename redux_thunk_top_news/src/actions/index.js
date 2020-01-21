export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ERROR = 'ERROR';

export const requestUsers = () => ({
    type: REQUEST_USERS
});
export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const errorActions=(error)=>{
    return{
        type: ERROR,
        data:error
    }
}