import React from 'react';
import {Container} from 'react-bootstrap';
import {connect} from "react-redux";
import LeaderBoardUser from "./leader-board-user";
import {Redirect} from "react-router-dom";

class Profile extends React.Component {
    render() {
        const {authedUser} = this.props

        if (!authedUser) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <Container className="container col-md-3">
                    <div className="justify-content-center">
                        <LeaderBoardUser id={authedUser}/>

                    </div>

                </Container>}
            </div>

        )
    }
}

function mapStateToProps({loading, authedUser, users}) {
    return {
        loading,
        users,
        authedUser,
    }
}

export default connect(mapStateToProps)(Profile)
