import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';


const root_style = {
  width: '100%',
  overflowX: 'auto',
  marginTop: 'theme.spacing.unit * 3'
};
const table_style = {
  minWidth: '1080'
};
const progress_style = {
  margin: 'theme.spacing.unit * 2'
}


// const customers = [
//   {
//   'id': 1,
//   'image': 'https://placeimg.com/64/64/1',
//   'name': '홍길동',
//   'birthday': '940724',
//   'gender': '남자',
//   'job': '직장인'
//   },
//   {
//   'id': 2,
//   'image': 'https://placeimg.com/64/64/2',
//   'name': '김도연',
//   'birthday': '940724',
//   'gender': '남자',
//   'job': '프로그래머'
//   },
//   {
//   'id': 3,
//   'image': 'https://placeimg.com/64/64/3',
//   'name': '제일린',
//   'birthday': '950402',
//   'gender': '여자',
//   'job': '주부'
//   }
// ]


// Stage of Applying React Library
// 1) constructor()
// 2) componentWillMount()
// 3) render()
// 4) componentDidMount()

// props or state => shouldComponentUpdate()

class App extends Component{

  constructor(props){ // props로 CustomerAdd.js로 값을 넘겨주기위함
    super(props);
    this.state={
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => { // 고객테이블만 새로고침하기 위한 함수
    this.setState({
      customers: '',
      completed: 0
    });
    this.callAPI()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callAPI()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callAPI = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    const { classes } = this.props;
    return(
      <div>
        <Paper style={{root_style}}>
          <Table style={{table_style}}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress style={progress_style} varaint="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
          
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    )
  }

}


export default App;
