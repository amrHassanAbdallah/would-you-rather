import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";

class App extends React.Component {
    state ={
        loggedIn:true
    }
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path='/login'
                           render={() =>
                               <Login/>}>
                        {this.state.loggedIn ? <Redirect to="/"/> : <Login/>}

                    </Route>
                    <Route exact path='/'
                           render={() =>
                               <Home/>}>
                        {!this.state.loggedIn ? <Redirect to="/login"/> : <Login/>}

                    </Route>
                </div>

            </Router>
        );
    }
}

export default App;
