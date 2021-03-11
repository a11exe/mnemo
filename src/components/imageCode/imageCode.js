import React, {
    Component
} from 'react';
import Task from '../task';
import Timer from '../timer'
import Hint from '../hint'
import './imageCode.css'

export default class ImageCode extends Component {

    allData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    listData = []
    timerId;

    state = {
        interval: 2000,
        actual: null
    }

    constructor(props) {
        super(props)
        this.start = this.start.bind(this)
        this.initListData();
    }

    initListData() {
        this.shuffle(this.allData);
        this.listData = [...this.allData.slice(0, 10)] 
    }

    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    renderNumData(listData) {
        let classNames;
        
        const data = listData.map((e, index) => {

            if (index === this.state.actual) {                
                classNames = 'd-inline-block num pl-5';
            } else {
                classNames = 'd-inline-block num pl-5 grey'                
            }                        
            return <div className={classNames} key={index}>{e}</div>
                        
        })
        return <div className="d-inline-block">{data}</div>
    }

    renderImgData(listData) {
        let classNames;
        
        const data = listData.map((e, index) => {

            if (index === this.state.actual) {                   
                classNames = 'img-thumbnail img-line border border-primary';
            } else {
                classNames = 'img-thumbnail img-line'                
            }    
            const src = process.env.PUBLIC_URL + `/img/numImg_${e}.jpg`;                                    
            return <img src={src} alt={e} className={classNames} key={index}></img> 
                        
        })
        return <div className="d-inline-block">{data}</div>
    }


    start() {
        let i = 0;
        this.timerId = setInterval(() => {
            if (i === this.listData.length) {
                clearInterval(this.timerId);
                this.setState({
                    hint: '',
                    actual: null
                })
            } else {
                const val = this.listData[i];            
                let hint
                if (this.props.type === 'num') {
                    const src = process.env.PUBLIC_URL + `/img/numImg_${val}.jpg`;
                    hint =  <img src={src} alt={val} className="img-hint"></img>            
                } else {
                    hint = <div className="grey hint">{val}</div>
                }
                
                this.setState({
                    hint: hint,
                    actual: i
                })
                i++
            }
        }, this.state.interval)
    }

    onChangeInterval(event) {
        this.setState(
            { interval: event.target.value }
        );
    }


    render() {
        const data = this.props.type === 'num' ? this.renderNumData(this.listData) : this.renderImgData(this.listData)
        return (
            <div className='container'>
                <Timer start={this.start} interval={this.state.interval} onChangeInterval={this.onChangeInterval} />
                <Task data={data} />
                <Hint data={this.state.hint} />
            </div>
        )
    }
}