import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

// 1.users
// 2.firse
// 3.loading
// 4.error
export default class List extends Component {
    state = {
        users: [],
        isFirst: true, // 是否为首次打开页面
        isLoading: false,// 是否加载中
        err: ''
    }

    componentDidMount() {
        this.token = PubSub.subscribe('atguigu', (msg, stateObj)=>{
            // console.log('List组件收到消息了')
            // console.log(msg, data)
            this.setState(stateObj)
        })
    }
    
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    
    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>欢迎搜索</h2> :
                        isLoading ? <h2>Loading……</h2> :
                        err ? <h2>{err}</h2> :
                        users.map((userObj => {
                            return (
                                <div key={userObj.id} className="card">
                                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                        <img src={userObj.avatar_url} style={{ width: '100px' }} />
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        )
    }
}
