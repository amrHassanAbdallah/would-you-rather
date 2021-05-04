import React from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';
import {connect} from "react-redux";

class Question extends React.Component{
    render() {
        const {users,authedUser,questions,id} = this.props
        let question = questions[id]
        return (
            <Container className="justify-content-md-center">
                <Card className="m-5">
                    <Card.Header>{users[question.author].name} asks:</Card.Header>
                    <Card.Body>
                        <Form className='new-tweet' onSubmit={this.handleSubmit}>
                            <Card.Title>Would you rather__</Card.Title>
                            <Card.Text>
                                <Form.Control as="select" custom   value="none">
                                    <option value="none"> select an answer</option>
                                    <option value={question.optionOne.text}>{question.optionOne.text}</option>
                                    <option value={question.optionTwo.text}>{question.optionTwo.text}</option>

                                </Form.Control>
                            </Card.Text>


                        </Form>

                    </Card.Body>
                </Card>


            </Container>
        )
    }
}

function mapStateToProps ({ authedUser, users,questions }) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Question)
