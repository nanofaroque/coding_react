import { receiveUsers, requestUsers, errorActions } from '../actions';
import axios from 'axios';
const fetchUsers = () => function (dispatch) {
    dispatch(requestUsers());
   /* return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((json) => dispatch(receiveUsers(json)))
        .catch(error => dispatch(errorActions(error)))*/

    return axios({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: 'get',
    })
        .then(res => {
            dispatch(receiveUsers(res.data));
            return res;
        })
        .catch(error => {
            dispatch(error(error));
            return error;
        });
};
export {fetchUsers as default}