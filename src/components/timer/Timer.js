import React, { Component } from 'react';

export default class Timer extends Component {

    render() {
        return (
            <div class="d-inline-flex p-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Интервал выполнения в милисекундах</span>
                </div>
                <input type="text" name='interval' id='interval' class="form-control" value="2000" />
                <div class="input-group-append">
                    <button id='start' class="btn btn-success" type="button">Начать</button>
                </div>
            </div>
        )
    }
}