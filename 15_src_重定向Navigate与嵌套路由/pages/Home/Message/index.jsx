import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    console.log('News组件开始render')
    return (
      <div>
        <ul>
            <li>message001</li>
            <li>message002</li>
            <li>message003</li>
        </ul>
      </div>
    )
  }
}
