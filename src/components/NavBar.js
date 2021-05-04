import React from "react";


import { Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {logoutUser} from "../actions/user";
import {connect} from "react-redux";

class NavBar extends React.Component {

    logout = () => {
        const {dispatch} = this.props
        dispatch(logoutUser())
    }

    render() {
        const {authedUser, users} = this.props
        console.log("before the render", authedUser, users)
        return (
            <Navbar bg="light" variant="light">
                <Link to="/" className="navbar-brand">
                    Would you rather?
                </Link>

                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/questions/new" className="nav-link">
                       New question
                    </Link>
                    <Link to="/leader-board" className="nav-link">
                        Leader Board
                    </Link>

                </Nav>

                <Nav>
                    {authedUser != null && (
                        <Link to="/profile">
                            <Navbar.Text>
                                Signed in as: {users[authedUser].name}
                            </Navbar.Text>
                        </Link>
                    )}


                    <Nav.Link href="#"></Nav.Link>
                    {authedUser == null ?
                        <Link to="/login">
                            <Button variant="outline-primary">Login</Button>
                        </Link>
                        :
                        <Link to="/login">
                            <Button variant="outline-primary" onClick={this.logout}>Logout</Button>
                        </Link>
                    }
                </Nav>

            </Navbar>
        );
    }

}

function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser,
    }
}

export default connect(mapStateToProps)(NavBar)
