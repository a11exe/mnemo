import React, {
    Component
  } from 'react';  
  import Task from '../task';
  import Timer from '../timer'
  import Hint from '../hint'
  
  export default class List extends Component {
  
    listData = ['ремень', 'паутина', 'чеснок', 'кобура', 'молоко', 'такса', 'книга', 
                        'циркуль', 'спички', 'ведро', 'палец', 'штопор', 'корона', 'щенок', 
                        'тиски', 'глобус', 'ананас', 'микрофон', 'гнездо', 'желудь', 'кассета',
                        'рельсы', 'волан', 'ранец', 'сапоги', 'факел', 'шприц', 'бубен', 
                        'лампа', 'биноколь']
    bk = {
        'н': 0,
        'м': 0,
        'г': 1,
        'ж': 1,
        'д': 2,
        'т': 2,
        'к': 3,
        'х': 3,
        'ч': 4,
        'щ': 4,
        'п': 5,
        'б': 5,
        'ш': 6,
        'л': 6,
        'с': 7,
        'з': 7,
        'в': 8,
        'ф': 8,
        'р': 9,
        'ц': 9        
    }
    //['нм', 'гж', 'дт', 'кх', 'чщ', 'пб', 'шл', 'сз', 'вф', 'рц'];
    timerId;      
        
    state = {
      interval: 2000,      
      actual: null
    }

    constructor(props) {
        super(props)
        this.start = this.start.bind(this)
    }
     
    renderData(listData) {       
        let classNames;
        return listData.map((e, index) => {            
            
            if (index === this.state.actual) {
                classNames="d-inline-block word mr-3 mt-3";
            } else {
                classNames="d-inline-block word grey mr-3 mt-3";
            }
            return <div className={classNames} key={e}>{e}</div>
        })
    }

    wordToCode(word) {
        let code = ''
        word.split("").forEach(element => {
            const val = this.bk[element]; 
            if (typeof val !== "undefined" && code.length < 3) {
                code += val;                
            }
        });
        return code;
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
            const hint = this.wordToCode(val);
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
          {interval: event.target.value}
          );
      }


    render() {  

      return ( 
        <div className='container'>          
          <Timer start={this.start} interval={this.state.interval} onChangeInterval={this.onChangeInterval}/>
          <Task data={this.renderData(this.listData)}/>
          <Hint data={this.state.hint} />
        </div>
      )
    }
  }