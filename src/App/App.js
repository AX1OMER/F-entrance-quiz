import React, {Component} from 'react';
import './App.scss';
import StudentList from "./component/StudentList";
import GroupedStudentList from "./component/GroupedStudentList";

class App extends Component {
    render() {
        return (
            <div data-testid="app" className="App">
                <GroupedStudentList/>
                <StudentList/>
            </div>
        );
    }
}

export default App;
