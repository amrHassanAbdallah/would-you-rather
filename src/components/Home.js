import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import Question from "./question";
import {connect} from "react-redux";

class Home extends React.Component{
    render() {
        const {id,questions} = this.props
        console.log("questions",questions)
        return (
           <div className="container col-md-8">
               {Object.keys(questions).map((question_id)=>(
                   <Question key={question_id} id={question_id} />
               ))}
           </div>
        );
    }
}
function mapStateToProps ({users,questions }) {
    return {
        questions,
        users,
    }
}

export default connect(mapStateToProps)(Home)
