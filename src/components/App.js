import React, {Fragment} from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import {_getUsers} from "../_DATA";
import {RECEIVE_DATA} from "../actions/users";
import LoadingBar from 'react-redux-loading'
import NavBar from "./NavBar";
import { connect } from 'react-redux'
import Profile from "./profile";

function receiveDataAction(users) {
    return {
        type: RECEIVE_DATA,
        users,
    };
}

function handleInitialData() {
    return (dispatch) => {
        Promise.all([
            _getUsers(),
        ]).then(([users]) => {
            dispatch(receiveDataAction(users))
        })
    }
}

class App extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitialData())
    }


    render() {
        return (
            <Router>
                <Fragment>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
                <div className="app">
                    <LoadingBar/>
                    <NavBar/>
                            <div>
                                <Route exact path='/login'
                                       render={() => {
                                           return <Login/>
                                       }}>

                                </Route>
                                <Route exact path='/'
                                       render={() =>
                                           <Home />}>
                                </Route>

                                <Route exact path='/profile'
                                       render={() =>
                                           <Profile />}>
                                </Route>
                            </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps ({loading, user, users }) {
    return {
        loading,
        users,
        user,
    }
}

export default connect(mapStateToProps)(App)
