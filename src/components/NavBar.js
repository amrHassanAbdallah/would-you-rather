import React from "react";


import {FormControl,Button,Form, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {logoutUser} from "../actions/user";
import {connect} from "react-redux";


class NavBar extends React.Component {
    logout = () =>{
        const { dispatch } = this.props
        dispatch(logoutUser())
    }

    render() {
        const { authedUser,users } = this.props
        console.log("before the render",authedUser,users)
        return (
            <Navbar bg="light" variant="light">
                <Link to="/">
                <Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
                </Link>

                <Nav className="mr-auto">
                    <Link to="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                </Nav>
                <Form inline>
                    {authedUser == null ?
                        <Link to="/login">
                            <Button variant="outline-primary">Login</Button>
                        </Link>
                            :
                        <Link to="/login">
                        <Button variant="outline-primary"  onClick={this.logout}>Logout</Button>
                        </Link>
                   }
                </Form>
            </Navbar>
        );
    }

}
function mapStateToProps ({users, authedUser }) {
    return {
        users,
        authedUser,
    }
}
export default connect(mapStateToProps)(NavBar)
