import React, { Component } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
// import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>  */}
              {/* <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="/about/*" element={<About/>} />
                  <Route path="/home/*" element={<Home/>} />
                  <Route path="/" element={<Navigate to ="/about" />}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
