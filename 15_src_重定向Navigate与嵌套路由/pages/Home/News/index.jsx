import React, { Component } from 'react'

export default class News extends Component {
  render() {
    console.log('News组件开始render')
    return (
      <div>
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
      </div>
    )
  }
}
