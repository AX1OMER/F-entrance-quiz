import React, {Component} from 'react'

class StudentTeam extends Component {
    render() {
        const [teamName, ...teamMembers] = this.props.team
        return (
            <div>
                <p>{teamName}</p>
                {teamMembers.map((student,index) => <span key={index}>{student}</span>)}
            </div>
        )
    }
}

export default StudentTeam;