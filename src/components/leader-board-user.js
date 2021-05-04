import React from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {addVote, handleAddVote} from "../actions/questions";

class LeaderBoardUser extends React.Component {

    render() {
        const {users, id} = this.props
        return (
            <Card>
                <Card.Img variant="top" src={users[id].avatarURL} />
                <Card.Body>

                    <Card.Title>{users[id].name}</Card.Title>
                    <div className="container row">
                        <div className="col-md-8">
                                Answered questions: {Object.keys(users[id].answers).length}
                                <br/>
                                Created questions: {users[id].questions.length}
                        </div>
                        <div className="col-md-4">
                            Score: {Object.keys(users[id].answers).length + users[id].questions.length }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoardUser)
