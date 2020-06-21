import React, {Component} from 'react';
import Container from './Container'
import './App.css';
import {getAllStudents} from "./client"
import {
Table, Avatar
} from 'antd';

class App extends Component {
  
  state = {
    students: []
  }

  componentDidMount() {
    this.fetchtStudents();
  }
  fetchtStudents = () => {
    getAllStudents()
    .then(response => response.json()
    .then(students =>{
      console.log(students);
      this.setState ({
        students
      });
    }));
  }
  render() {
    const {students} = this.state;
    
    if (students && students.length) {

      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) => (
            <Avatar>
              {`${student.firstName.charAt(0).toUpperCase()} ${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
        {
          title : "Student Id",
          dataIndex : "studentId",
          key : "studentId"
        },
        {
          title : "First Name",
          dataIndex : "firstName",
          key : "firstName"
        },
        {
          title : "Last Name",
          dataIndex : "lastName",
          key : "lastName"
        },
        {
          title : "E-mail",
          dataIndex : "email",
          key : "email"
        },
        {
          title : "Gender",
          dataIndex : "gender",
          key : "gender"
        },
      ];

      return (
      <Container>
        <Table 
          dataSource={students} 
          columns={columns} 
          pagination= {false}
          rowKey='studentId'/>
      </Container> )
    }

    return <h1>No Student found</h1>
  }
}

export default App;