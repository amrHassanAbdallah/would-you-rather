import React from 'react';
import { Container, Form} from 'react-bootstrap';
import {newUserLogin} from "../actions/user";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    onChangeHandler = (event) => {
        console.log(event.target.value)
        const { dispatch } = this.props
        dispatch(newUserLogin(event.target.value))
        this.setRedirect()

    }
    render() {
        const {users,authedUser} = this.props
        return (
            <Container className="justify-content-md-center">
                {this.renderRedirect()}

                {authedUser != null ?
                <h2>Logged in as {users[authedUser].name}</h2>
                :
                    <div>
                        <h2>
                            Login as
                        </h2>
                        <Form className="justify-content-md-center">
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Control as="select" custom  onChange={this.onChangeHandler} value="none">
                                    <option value="none"> select a user</option>
                                    {
                                        Object.keys(users).map((user) => (

                                            <option
                                                key={user}
                                                value={user}
                                            >
                                                {users[user].name}
                                            </option>
                                        ))
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                }

            </Container>
        )
    }
}
function mapStateToProps ({loading, authedUser, users }) {
    return {
        loading,
        users,
        authedUser,
    }
}

export default connect(mapStateToProps)(Login)
