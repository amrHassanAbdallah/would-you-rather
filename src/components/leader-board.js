import React from 'react';
import {CardDeck} from 'react-bootstrap';
import {connect} from "react-redux";
import LeaderBoardUser from "./leader-board-user";
import {Redirect} from "react-router-dom";

class LeaderBoard extends React.Component {

    render() {
        const {newUsers, authedUser} = this.props

        if (!authedUser){
            return <Redirect to='/login'/>
        }
        return (
                <div className="container">

                        <CardDeck>
                            {newUsers.map((user) => (
                                <LeaderBoardUser key={user.id} id={user.id}/>
                            ))}
                        </CardDeck>
                </div>

    )
    }
}

function mapStateToProps({users,authedUser}) {
    let calcUsers = Object.keys(users).map((key) => {
        return {id: key, score: Object.keys(users[key].answers).length + users[key].questions.length}
    })


    return {
        authedUser,
        users,
        newUsers: calcUsers.sort((a, b) => b["score"] - a["score"])
    }
}

export default connect(mapStateToProps)(LeaderBoard)
