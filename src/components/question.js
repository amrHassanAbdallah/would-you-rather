import React from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {addVote, handleAddVote} from "../actions/questions";

class Question extends React.Component {
    handleVote = (questionID, option) => {
        const {dispatch, authedUser, id, questions} = this.props
        if (authedUser == null) {
            alert("you need to login in order to vote")
        }
        if (questions[id][option].votes.indexOf(authedUser) === -1) {
            dispatch(handleAddVote(questionID, option))
        }

    }

    render() {
        const {users, authedUser, questions, id} = this.props
        let question = questions[id]
        return (
            <Container className="justify-content-md-center">
                <Card className="m-5">
                    <Card.Header>{users[question.author].name} asks:</Card.Header>
                    <Card.Body>
                        <div className="container">
                            <Card.Title>Would you rather__</Card.Title>
                            <div>
                                <Form>
                                    {['optionOne', 'optionTwo'].map((option) => (
                                        <div key={option} className="mb-3">
                                            <Form.Check type="checkbox" id={`check-api-`+option+question.id}>
                                                <Form.Check.Input onChange={() => {
                                                    return this.handleVote(question.id, option)
                                                }} type="checkbox"
                                                                  checked={authedUser != null && question[option].votes.indexOf(authedUser) !== -1}
                                                                  disabled={authedUser == null}
                                                                  isValid={authedUser != null && question[option].votes.indexOf(authedUser) !== -1}/>
                                                <Form.Check.Label>{question[option].text}</Form.Check.Label>
                                                {option === "optionOne" && (
                                                    <div className='text-center pt-2'>
                                                        Or
                                                    </div>
                                                )}
                                            </Form.Check>
                                        </div>
                                    ))}

                                </Form>
                            </div>


                        </div>

                    </Card.Body>
                </Card>


            </Container>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Question)
