import React, { Component } from 'react';
import './task.css'

export default class Task extends Component {       

    render() {     
        return (            
            <div className="container">
                {this.props.data}
            </div>
        )
    }
}