import React from 'react';
import {Badge, Button, Card, Container, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import Question from "./question";
import NotFound from "./not-found";

class SinglePostDetails extends React.Component {

    render() {
        const {questions,id,authedUser} = this.props
        if (!id || !questions[id] || !authedUser ){
            return <NotFound />
        }
        return (
            <div className="container col-md-8">
                <Question id={id} displayDetails={true} />
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},props) {
    const { id } = props.match.params

    return {
        id,
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(SinglePostDetails)
