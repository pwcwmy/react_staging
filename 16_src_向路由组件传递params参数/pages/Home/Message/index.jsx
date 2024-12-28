import React, { Component } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state={messageArr:[
    {id:'001', title:'message001'},
    {id:'002', title:'message002'},
    {id:'003', title:'message003'},
  ]}

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
            {
                messageArr.map((messageObj)=>{
                    return (
                    <li key={messageObj.id}>
                        <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                    </li>
                    )
                })
            }
        </ul>
        <hr/>
        <Routes>
            <Route path="detail/:id/:title" element={<Detail/>}/>
        </Routes>
      </div>
    )
  }
}
