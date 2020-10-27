import React, {Component} from 'react';
import HttpClient from "./HttpClient";

class StudentList extends Component {

    state = {
        studentList: [],
    }

    componentDidMount() {
        const url = "http://127.0.0.1:8080/student/list"
        HttpClient(null, "GET", url).then(result => {
            this.setState({
                    studentList: JSON.parse(result),
                }
            )
        })
    }

    render(){
        const {studentList} = this.state
        return (
            <div>
                {studentList.map(student => <span key={student}>{student}</span>)}
            </div>
        )
    }
}

export default StudentList;