import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import {_getUsers} from "./_DATA";
import {RECEIVE_DATA} from "./actions/users";

function receiveDataAction(users) {
    console.log(RECEIVE_DATA,users)
    return {
        type:RECEIVE_DATA,
        users,
    };
}

class App extends React.Component {
    componentDidMount() {
        const {store} = this.props
        Promise.all([
            _getUsers(),
        ]).then(([users])=>{
            console.log(users)
            store.dispatch(receiveDataAction(users))
        })
        store.subscribe(()=>this.forceUpdate())
    }


    render() {
        const {store} = this.props
        const {users,loading} = store.getState()
        return (
            <Router>
                <div className="app">
                    <Route exact path='/login'
                           render={() => {
                               return <Login
                                   store={this.store}
                                   users={users}
                                   loading={loading}
                               />
                           }}>
                    </Route>
                    <Route path="/" render={()=> {
                        return <Home store={this.store} />
                    }}> </Route>
                </div>

            </Router>
        );
    }
}

export default App;
