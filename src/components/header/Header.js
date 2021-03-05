import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div class="container">
                <h2>Буквенно-Цифровой Код (БЦК)</h2>
                <p>0-нм, 1-гж, 2-дт, 3-кх, 4-чщ, 5-пб, 6-шл, 7-сз, 8-вф, 9-рц, 0-нм</p>
                <p>25 - дтпб, 89 - вфрц</p>
                <p>01 - гж, 08 - вф (ноль в числах 01-09 не кодируется)</p>
                <p>Кодируйте двузначные числа в согласные буквы в соответствии с БЦК.</p>
            </div>
        )
    }
}