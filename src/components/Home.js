import React from 'react';
import Question from "./question";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Tabs} from "react-bootstrap";
import Tab from "@material-ui/core/Tab";

class Home extends React.Component{
    render() {
        const {authedUser,categorizedQuestions} = this.props
        if (!authedUser){
            return <Redirect to='/login'/>
        }
        return (


           <div className="container col-md-8">
               <Tabs defaultActiveKey={"Unanswered Questions".toLowerCase()} id="uncontrolled-tab-example">
                   {Object.keys(categorizedQuestions).map((category)=>(
                       <Tab eventKey={category.toLowerCase()} title={category}>
                           {categorizedQuestions[category].map((question_id)=>(
                               <Question key={question_id} id={question_id} />
                           ))}
                           {categorizedQuestions[category].length == 0 &&(
                               <div className="text-center text-info">You answered all questions</div>
                           )}
                       </Tab>
                   ))}

               </Tabs>
           </div>
        );
    }
}
function mapStateToProps ({users,questions ,authedUser}) {
    let categorizedQuestions = {"Unanswered Questions":[],"Answered Questions":[]}
   let sortedQuestions = Object.keys(questions).sort((a,b)=>questions[b].timestamp - questions[a].timestamp)

    for(let i =0;i<sortedQuestions.length && authedUser;i++){
        let key = Object.keys(users[authedUser].answers).indexOf(sortedQuestions[i]) > -1? "Answered Questions":"Unanswered Questions"
        categorizedQuestions[key].push(sortedQuestions[i])
    }

    return {
        authedUser,
        questions,
        categorizedQuestions:categorizedQuestions,
    }
}

export default connect(mapStateToProps)(Home)
