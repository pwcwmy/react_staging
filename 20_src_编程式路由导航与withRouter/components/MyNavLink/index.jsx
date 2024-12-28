import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log('MyNavLink收到props, 包含标签体children', this.props)
    return (
      <div>
        <NavLink className="list-group-item" {...this.props}/>
      </div>
    )
  }
}
