import React from 'react';
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/questions";
import { Redirect } from "react-router-dom"
import {Button, Form,Card} from "react-bootstrap";


class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleChange = (e) => {
        const optionOne = document.getElementById("firstOption").value
        const optionTwo = document.getElementById("secOption").value
        this.setState(() => ({
            optionOne,
            optionTwo
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const {optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
        }))
    }

    render() {
        const {optionOne, optionTwo, toHome} = this.state

        if (toHome === true) {
            return <Redirect to='/'/>
        }

        const tweetLeft = 280 - optionOne.length
        return (
            <div className="container col-6  justify-content-center  ">
                <Card className="m-5">
                    <Card.Header>Create New question</Card.Header>
                    <Card.Body>
                        <Form className='new-tweet' onSubmit={this.handleSubmit}>
                        <Card.Title>Would you rather__</Card.Title>
                        <div as='div'>
                            Complete the question
                        </div>
                            <Form.Control id='firstOption'
                                placeholder="Enter Option One text here"
                                value={optionOne}
                                onChange={this.handleChange}
                                className='textarea pt-2 pb-2'
                                maxLength={280}
                            />
                            {tweetLeft <= 100 && (
                                <div className='tweet-length'>
                                    {tweetLeft}
                                </div>
                            )}
                            <div className='text-center pt-2'>
                                Or
                            </div>

                            <Form.Control
                                id='secOption'
                                placeholder="Enter Option Two text here"
                                value={optionTwo}
                                onChange={this.handleChange}
                                className='textarea pt-2 pb-2'
                                maxLength={280}
                            />
                            {tweetLeft <= 100 && (
                                <div className='tweet-length'>
                                    {tweetLeft}
                                </div>
                            )}
                            <Button
                                variant="primary" className='mt-4 col-12' type="submit"
                                disabled={optionOne === '' || optionTwo === ""}>
                                Submit
                            </Button >
                        </Form>

                    </Card.Body>
                </Card>





            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)
