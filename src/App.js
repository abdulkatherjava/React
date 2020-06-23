import React, {Component} from 'react';
import Container from './Container'
import './App.css';
import {getAllStudents} from "./client"
import { LoadingOutlined } from '@ant-design/icons';
import {
Table,
Avatar,
Spin,
} from 'antd';

const getIndicatorIcon = () => <LoadingOutlined style={{ fontSize: 24}} spin />;

class App extends Component {
  
  state = {
    students: [],
    isFetching : false
  }

  componentDidMount() {
    this.fetchtStudents();
  }
  fetchtStudents = () => {

    this.setState ({
        isFetching: true
      });

    getAllStudents()
    .then(response => response.json()
    .then(students =>{
      console.log(students);
      this.setState ({
        students,
        isFetching: false
      });
    }));
  }
  render() {
    const {students, isFetching} = this.state;
    
    if (isFetching) {
        return (
          <Container>
            <Spin indicator={getIndicatorIcon()}/>  
          </Container>
        );
    }

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
