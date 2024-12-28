import React, { Component } from 'react'

// const DetailData = [
//     {id:'001', content:'你好，字节'},
//     {id:'002', content:'你好，阿里'},
//     {id:'003', content:'你好，腾讯'},
// ]

export default class Detail extends Component {
  render() {
    console.log('开始render Detail组件',this.props)
    
    
    // const {id, title} = this.props.match.params
    // const findResult = DetailData.find((detailObj)=>{
    //     return detailObj.id === id
    // })
    return (
      <div>
        <ul>
            <li>id</li>
            {/* <li>id: {id}</li>
            <li>title: {title}</li> */}
            {/* <li>content: {findResult.content}</li> */}
        </ul>
      </div>
    )
  }
}

