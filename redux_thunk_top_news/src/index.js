import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import {logger} from "redux-logger";
import rootReducers from './reducers'

const store = createStore(rootReducers, applyMiddleware(thunk));
const onStateChange = (function (global) {
    global._state = this.getState()
}.bind(store, global))
store.subscribe(onStateChange)
onStateChange()
console.info('Application state is available via global _state object.', '_state=', global._state)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
