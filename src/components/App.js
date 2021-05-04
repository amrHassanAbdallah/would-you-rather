import React, {Fragment} from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import LoadingBar from 'react-redux-loading'
import NavBar from "./NavBar";
import {connect} from 'react-redux'
import Profile from "./profile";
import NewQuestion from "./new-question";
import {handleInitialData} from "../actions/shared";


class App extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitialData())
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>

                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                        crossOrigin="anonymous"
                    />
                    <div className="app">
                        <NavBar/>
                        <div>
                            <Route exact path='/login'
                                   render={() => {
                                       return <Login/>
                                   }}>

                            </Route>
                            <Route exact path='/'
                                   render={() =>
                                       <Home/>}>
                            </Route>

                            <Route exact path='/profile'
                                   render={() =>
                                       <Profile/>}>
                            </Route>

                            <Route exact path='/questions/new'
                                   render={() =>
                                       <NewQuestion/>}>
                            </Route>
                        </div>

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({loading, authedUser, users}) {
    return {}
}

export default connect(mapStateToProps)(App)
