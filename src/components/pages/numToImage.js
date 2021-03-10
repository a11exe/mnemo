import React, {Component} from 'react';
import Header from '../header'
import ImageCode from '../imageCode'

export default class NumToImage extends Component {
   
    render() {
        const header = () => {
            return (
                <div>                    
                    <p>Вспоминайте образы соответствующие цифрам.</p>                    
                </div>
            )
        }
        return (
            <div className="container">
                <Header text={header()} /> 
                <ImageCode type='num'/>               
            </div>
        )
    }
}