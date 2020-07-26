import React, { Component } from 'react'

import RandColorApp from './apps/randomColors/RandColApp'

import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RandColorApp/>
      </div>
    )
  }
}

