import receiveUsersReducer from "../../src/reducers/receiveUsersReducer";
import {RECEIVE_USERS} from "../../src/actions";

describe('receive user reducer', () => {
    it('should return the intial state of the store when nothing has passed', () => {
        expect(receiveUsersReducer(undefined, {})).toEqual(
            {
                users: [],
                isFetching: false,
                isError: false
            })
    });

    it('should change the state when receive users invoked with users', () => {
        expect(receiveUsersReducer({users: []}, {
            type: RECEIVE_USERS,
            users: [{
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }]
        })).toEqual({
            users: [{
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }]
        })
    })
});