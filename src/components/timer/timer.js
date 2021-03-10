import React, { Component } from 'react';

export default class Timer extends Component {
    
    render() {
        return (
            <div className="d-inline-flex p-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Интервал выполнения в милисекундах</span>
                </div>
                <input 
                    type="text" 
                    name='interval' 
                    id='interval' 
                    className="form-control" 
                    value={this.props.interval} 
                    onChange={this.props.onChangeInterval}/>
                <div className="input-group-append">
                    <button     id='start' 
                                className="btn btn-success" 
                                type="button"
                                onClick={this.props.start}>Начать</button>
                </div>
            </div>
        )
    }
}