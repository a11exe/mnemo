import React, { Component } from 'react';

export default class Task extends Component {       

    render() {     
        return (            
            <div className="container">
                {this.props.data}
            </div>
        )
    }
}