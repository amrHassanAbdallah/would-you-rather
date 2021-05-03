import React from 'react';
import { Container} from 'react-bootstrap';
import {connect} from "react-redux";

class Profile extends React.Component{
    render() {
        const {users,authedUser} = this.props
        console.log("inside the profile",authedUser)
        return (
            <Container className="justify-content-md-center">

                {this.props.loading  && (
                    <span>loading...</span>
                )}
                {authedUser != null ?
                    <h2>Logged in as {users[authedUser].name}</h2>
                    :
                    <div>
                        <h2>
                            should redirect
                        </h2>
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

export default connect(mapStateToProps)(Profile)
