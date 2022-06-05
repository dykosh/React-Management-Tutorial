import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

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
    return(
      <>

        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              // map함수를 사용할 때에는 key값이 꼭 필요하다.
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />)
          })
        }


      {/* 하단처럼 일일이 적지 않아도 상단처럼 map함수로 간단히 표기할 수 있다. */}
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> */}
      </>
    )
  }

}


export default App;
