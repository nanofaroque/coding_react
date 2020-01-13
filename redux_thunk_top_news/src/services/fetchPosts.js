import {receivedPosts, requestPosts} from "../actions";
const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export function fetchPosts(channel) {
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                    dispatch(receivedPosts(json));
                },
            );
    };
};
