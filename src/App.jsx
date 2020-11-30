import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentList = ()=>{
      axios.get('http://localhost:3000/api1/students').then(
          response => {console.log('成功了',response.data);},
          error => {console.log('失败了',error);}
      )
    }

    getCarlist = ()=>{
      axios.get('http://localhost:3000/api2/cars').then(
          response => {console.log('成功了',response.data);},
          error => {console.log('失败了',error);}
      )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentList}>点我获取学生数据</button>
                <button onClick={this.getCarlist}>点我获取汽车数据</button>
            </div>
        )
    }
}
