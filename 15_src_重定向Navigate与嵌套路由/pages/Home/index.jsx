import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    console.log('开始render Home 组件')
    return (
      <div>
        <h3>我是Home</h3>
        <div>
          <ul className='nav nav-tabs'>
            <li><MyNavLink to="/home/news">News</MyNavLink></li>
            <li><MyNavLink to="/home/message">Message</MyNavLink></li>
          </ul>
          <Routes>
            <Route path="news" element={<News/>} />
            <Route path="message" element={<Message/>} />
            <Route path="/" element={<Navigate to ="/home/news" />}/>
          </Routes>
          {/* <News/>
          <Message/> */}
        </div>
      </div>
    )
  }
}
