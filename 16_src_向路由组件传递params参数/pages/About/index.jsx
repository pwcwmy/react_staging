import React, { Component } from 'react'

export default class About extends Component {
  render() {
    // console.log('About路由组件收到props', this.props)
    console.log('开始render About 组件')
    return (
      <div>
        <h3>我是About</h3>
      </div>
    )
  }
}
