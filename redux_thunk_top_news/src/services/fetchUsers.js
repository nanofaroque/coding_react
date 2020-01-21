import { receiveUsers, requestUsers, errorActions } from '../actions';
import axios from 'axios';
const fetchUsers = () => function (dispatch) {
    dispatch(requestUsers());
    return axios({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: 'get',
    })
        .then(res => {
            dispatch(receiveUsers(res.data));
            return res;
        })
        .catch(error => {
            dispatch(errorActions(error));
            return error;
        });
};
export {fetchUsers as default}