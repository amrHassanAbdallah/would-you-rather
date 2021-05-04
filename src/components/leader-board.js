import React from 'react';
import {Button, Card, CardDeck, Container, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {addVote, handleAddVote} from "../actions/questions";
import LeaderBoardUser from "./leader-board-user";
import user from "../reducers/user";

class LeaderBoard extends React.Component {

    render() {
        const {newUsers} = this.props
        return (
            <div className="container">
                <CardDeck>
                    {newUsers.map((user) => (
                        <LeaderBoardUser id={user.id}/>
                    ))}
                </CardDeck>
            </div>

        )
    }
}

function mapStateToProps({users}) {
    let calcUsers =  Object.keys(users).map((key)=>{
        return {id: key, score : Object.keys(users[key].answers).length + users[key].questions.length}
    })


    return {
        users,
        newUsers:   calcUsers.sort((a,b)=>b["score"] - a["score"])
    }
}

export default connect(mapStateToProps)(LeaderBoard)
