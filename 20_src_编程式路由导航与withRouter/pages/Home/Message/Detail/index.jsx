import React, { Component } from 'react'
import qs from 'qs'
const DetailData = [
    {id:'001', content:'你好，字节'},
    {id:'002', content:'你好，阿里'},
    {id:'003', content:'你好，腾讯'},
]

export default class Detail extends Component {
  render() {
    
    // 接收params参数
    // const {id, title} = this.props.match.params
    
    // 接收search参数
    const {search} = window.location
    const {id, title} = qs.parse(search.slice(1))

    // 接收state参数
    // console.log(window.location)
    // const {id, title} = window.location.state
    
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
    })
    return (
      <div>
        <ul>
            <li>id: {id}</li>
            <li>title: {title}</li> 
            <li>content: {findResult.content}</li>
        </ul>
      </div>
    )
  }
}

