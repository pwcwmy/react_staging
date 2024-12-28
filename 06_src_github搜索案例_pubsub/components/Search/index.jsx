import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = () => {
        // console.log("search组件发出消息了")
        // PubSub.publish('atguigu', {name: 'Tom', age: 18})
        // 连续解构赋值+重命名
        const {keywordElement: {value: keyword}} = this
        console.log(keyword)
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                // console.log('成功了', response.data),
                PubSub.publish('atguigu', {users:response.data.items, isLoading: false})
            },
            error => {
                // console.log('失败了', error),
                PubSub.publish('atguigu', {err: error.message, isLoading: false})
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
