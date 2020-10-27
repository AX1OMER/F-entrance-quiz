import React, { Component } from 'react';
import HttpClient from "./HttpClient";

class StudentList extends Component {

  state = {
    studentList: [],
    newStudent: '+ 添加学员',
  }

  componentDidMount () {
    const url = "http://127.0.0.1:8080/student/list"
    HttpClient(null, "GET", url).then(result => {
      this.setState({
        studentList: JSON.parse(result),
      }
      )
    })
  }

  addStudent = (student) => {
    const url = "http://127.0.0.1:8080/student"
    HttpClient(student, "post", url).then(result => {
      this.setState({
        studentList: JSON.parse(result),
        newStudent: '+ 添加学员',
      })
    })
  }

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.addStudent(e.target.value)
    }
  }

  onFocus = (e) => {
    if (e.target.value === '+ 添加学员') {
      e.target.value = ''
    }
  }

  onBlur = (e) => {
    if (e.target.value === '') {
      e.target.value = '+ 添加学员'
    }
  }

  onChange = (e) => {
    this.setState({
      newStudent: e.target.value,
    })
  }

  render () {
    const {studentList,newStudent} = this.state
    return (
      <div>
        <p>学员列表</p>
        {studentList.map(student => <span key={student}>{student}</span>)}
        <input type="text" id="addStudent"
               value={newStudent} onKeyDown={this.onKeyDown}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
        />
      </div>
    )
  }
}

export default StudentList;