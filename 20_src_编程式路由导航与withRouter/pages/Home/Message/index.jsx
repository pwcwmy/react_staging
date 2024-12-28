import React, { Component } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state={messageArr:[
    {id:'001', title:'message001'},
    {id:'002', title:'message002'},
    {id:'003', title:'message003'},
  ]}
  
  replaceShow = (id, title) => {
    // replace+search参数
    this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
  }

  pushShow = (id, title) => {
    // push+search参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(2)
  }

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
            {
                messageArr.map((messageObj)=>{
                    return (
                    <li key={messageObj.id}>
                        {/* 向路由组件传递params参数 */}
                        {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}
                        
                        {/* 向路由组件传递search参数 */}
                        <Link to={`/home/message/detail?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>

                        {/* 向路由组件传递state参数 */}
                        {/* <Link to={{pathname:'/home/message/detail', state:{id: messageObj.id, title: messageObj.title}}}>{messageObj.title}</Link> */}
                        &nbsp;<button onClick={()=>this.replaceShow(messageObj.id, messageObj.title)}>replace查看</button>
                        &nbsp;<button onClick={()=>this.pushShow(messageObj.id, messageObj.title)}>push查看</button>
                    </li>
                    )
                })
            }
        </ul>
        <hr/>
        <Routes>
            {/* 接收params参数 */}
            {/* <Route path="detail/:id/:title" element={<Detail/>}/> */}

            {/* search参数无需接收，正常写路由即可 */}
            {/* <Route path="detail" element={<Detail/>}/> */}

            {/* state参数无需接收，正常写路由即可 */}
            <Route path="detail" element={<Detail/>}/>
        </Routes>
        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>go(2)</button>&nbsp;
      </div>
    )
  }
}
