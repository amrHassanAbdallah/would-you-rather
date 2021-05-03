import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers,createStore} from 'redux'
import users from "./reducers/users";
import loading from "./reducers/loading";



const store = createStore(combineReducers({
    users: users,
    loading
}))

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

