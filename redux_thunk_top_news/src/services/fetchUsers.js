import {receiveUsers, requestUsers, errorActions} from "../actions";
export const fetchUsers = ()=> {
    return function (dispatch) {
        dispatch(requestUsers());
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                    dispatch(receiveUsers(json));
                },
            ).catch(error=>dispatch(errorActions(error)))
    };
};
