import React, { Component } from 'react';
import Header from '../header'
import List from '../list'

export default class ListToNum extends Component {

    render() {
        const header = () => {
            return (
                <div>                    
                    <p>Вслух называйте цифры, соответствующие первым трем согласным буквам слова.</p>                    
                </div>
            )
        }
        return (
            <div className="container">
                <Header text={header()} /> 
                <List />               
            </div>
        )
    }
}