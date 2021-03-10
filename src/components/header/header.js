import React, { Component } from 'react';

export default class Header extends Component {



    render() {
        return (
            <div className="container mt-5">    
                {this.props.text}                            
            </div>
        )
    }
}