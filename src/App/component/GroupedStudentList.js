import React, {Component} from 'react';
import HttpClient from "./HttpClient";
import StudentTeam from "./StudentTeam";

class GroupedStudentList extends Component {
    state = {
        groupedStudentList: [],
    }

    onClick() {
        const url = "http://127.0.0.1:8080/student/group"
        HttpClient(null, "GET", url).then(result => {
            this.setState({
                    groupedStudentList: JSON.parse(result),
                }
            )
        })
    }

    render() {
        const groupedStudentList = this.state.groupedStudentList
        console.log(groupedStudentList)
        return (
            <div>
                <button onClick={() => this.onClick()}>分组学员</button>
                {groupedStudentList.map((studentTeam, index) => <StudentTeam key={index} team={studentTeam}/>)}
            </div>
        )
    }
}

export default GroupedStudentList;