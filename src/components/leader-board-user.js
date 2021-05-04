import React from 'react';
import {Button, Card, Container, Form,Badge} from 'react-bootstrap';
import {connect} from "react-redux";

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
                            <Button variant="primary">
                                Score <Badge variant="warning"> {Object.keys(users[id].answers).length + users[id].questions.length }</Badge>
                                <span className="sr-only">Total questions and answers</span>
                            </Button>

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
