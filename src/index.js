import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import users from "./reducers/users";
import loading from "./reducers/loading";
import user from "./reducers/user";
import * as ReduxThunk from "redux-thunk";
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'


const store = createStore(
    reducer,
    middleware,
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

