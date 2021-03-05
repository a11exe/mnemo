import React, { Component } from 'react';
import Header from '../header';
import Task from '../task';
import Timer from '../timer'

export default class App extends Component {

  render() {
    return(
      <div className='container'>
        <Header />
        <Timer />
        <Task />
      </div>
    )
  }
}