import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './components/Intro';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    isLoggedIn: false,
    user: null
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                user: action.user
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
