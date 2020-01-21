import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {RECEIVE_USERS, REQUEST_USERS} from "../../src/actions";
import fetchUsers from '../../src/services/fetchUsers'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock=[{
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
describe('getPosts actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mock,
            });
        });

        const expectedActions = [
            { type: REQUEST_USERS },
            { type: RECEIVE_USERS, users: mock },
        ];

        const store = mockStore({ users: {} })

        return store.dispatch(fetchUsers()).then(() => {
            // return of async actions
            console.log('actions',JSON.stringify(store.getActions()))
            expect(store.getActions()).toEqual(expectedActions);
        }).catch(err=>console.log(err));
    });
});