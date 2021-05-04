import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import Question from "./question";
import {connect} from "react-redux";

class Home extends React.Component{
    render() {
        const {questions,sortedQuestions} = this.props
        return (
           <div className="container col-md-8">
               {sortedQuestions.map((question_id)=>(
                   <Question key={question_id} id={question_id} />
               ))}
           </div>
        );
    }
}
function mapStateToProps ({questions }) {
    return {
        questions,
        sortedQuestions:Object.keys(questions).sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)
