import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const root_style = {
  width: '100%',
  overflowX: 'auto',
  marginTop: 'theme.spacing.unit * 3'
};
const table_style = {
  minWidth: '1080'
};


const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '940724',
  'gender': '남자',
  'job': '직장인'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김도연',
  'birthday': '940724',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '제일린',
    'birthday': '950402',
    'gender': '여자',
    'job': '주부'
  }
]
class App extends Component{
  render(){
    const { classes } = this.props;
    return(
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
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })}
          </TableBody>
        </Table>
      </Paper>
    )
  }

}


export default App;
