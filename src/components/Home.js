import React from 'react';
import Question from "./question";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Home extends React.Component{
    render() {
        const {sortedQuestions,authedUser} = this.props
        if (!authedUser){
            return <Redirect to='/login'/>
        }
        return (
           <div className="container col-md-8">
                   <div>
                       {sortedQuestions.map((question_id)=>(
                           <Question key={question_id} id={question_id} />
                       ))}
                   </div>}
           </div>
        );
    }
}
function mapStateToProps ({questions ,authedUser}) {
    return {
        authedUser,
        questions,
        sortedQuestions:Object.keys(questions).sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)
