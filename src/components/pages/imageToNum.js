import React, {Component} from 'react';
import Header from '../header'
import ImageCode from '../imageCode'

export default class ImageToNum extends Component {
   
    render() {
        const header = () => {
            return (
                <div>                    
                    <p>Вспоминайте цифры соответствующие обрзам.</p>                    
                </div>
            )
        }
        return (
            <div className="container">
                <Header text={header()} /> 
                <ImageCode type='image'/>               
            </div>
        )
    }
}