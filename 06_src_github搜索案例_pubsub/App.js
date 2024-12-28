import React, { Component } from 'react'
// import axios from 'axios'
// import './App.css'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {

  // state = {
  //   users: [],
  //   isFirst: true, // 是否为首次打开页面
  //   isLoading: false,// 是否加载中
  //   err: ''
  // }

  // saveUsers = (users) => {
  //   this.setState({users})
  // }

  // 统一4种state
  // updateAppState = (stateObj) => {
  //   this.setState(stateObj)
  // }

  render() {
    // const {users} = this.state
    return (
      <div>
        <div className="container">
          <Search/>
          <List/>
        </div>
      </div>
    )
  }
}
