import { receiveUsers, requestUsers, errorActions } from '../actions';

const fetchUsers = () => function (dispatch) {
    dispatch(requestUsers());
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(
            response => response.json()
        )
        .then((json) => {
                dispatch(receiveUsers(json));
            },
        ).catch(error => dispatch(errorActions(error)))
};
export {fetchUsers as default}