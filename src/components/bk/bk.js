import React, {
    Component
  } from 'react';  
  import Task from '../task';
  import Timer from '../timer'
  import Hint from '../hint'
  
  export default class Bk extends Component {
  
    tableData = [];
    bk = ['нм', 'гж', 'дт', 'кх', 'чщ', 'пб', 'шл', 'сз', 'вф', 'рц'];
    timerId;  
    cols = 3;
    rows = 3;
  
    constructor(props) {
      super(props);
      this.start = this.start.bind(this);
      this.onChangeInterval = this.onChangeInterval.bind(this);
      this.generateTableData(this.rows, this.cols);      
    }
  
    state = {
      interval: 2000,
      hint: '',
      actual: {      
      }
    }
    
    componentDidMount() {
      
    }
  
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  
    generateTableData(rows, cols) {
      for (let j = 0; j < rows; j++) {
        const row = [];
        for (let i = 0; i < cols; i++) {
          if (this.props.type === 'num') {
            row[i] = '' + this.getRandomInt(9) + this.getRandomInt(9);
          } else {
            row[i] = this.numToCode('' + this.getRandomInt(9) + this.getRandomInt(9));
          }          
        }
        this.tableData[j] = row;
      }
    }
  
    getRows(tableData) {
      return tableData.map((row, i) => {
        return<div className="row" key={i} > {
            this.getCols(row, i)
          } </div>;
      });
    }
  
    getCols(row, i) {
      return row.map((col, y) => {
        let classNames = '';
        if ((i === this.state.actual.row) && (y === this.state.actual.col)) {
          classNames = 'col-sm';
        } else {
          classNames = 'col-sm grey'
        }
        return <div key={i * 10 + y} className={classNames}> {col} </div>
      });
    }
  
    numToCode(num) {
      let res = '';
      const first = +(num.substring(0, 1));
      const second = +(num.substring(1, 2));
      if (first !== '0') {
          res += this.bk[first];
      }
      res += this.bk[second];
      return res;
    }
  
    getCodeIndex(code) {
      let index;                
      for(let i = 0; i < this.bk.length; i++) {
          if (this.bk[i] === code) {
              index = i;
              break;
          }
      }
      return index;
  }
  
    codeToNum(code) {
      let res = '';
      const first = code.length === 2 ? 'нм' : code.substring(0, 2);
      const second = code.substring(2, 4);        
      res += this.getCodeIndex(first);        
      res += this.getCodeIndex(second);
      return res;
  }
  
    start() {    
      let col = 0;    
      let row = 0;    
      this.timerId = setInterval(() => {       
        if (row === this.rows) {
          clearInterval(this.timerId);
          this.setState({
             hint: '',
             actual: {}
          })        
        } else {
          const val = this.tableData[row][col];
          const hint = this.props.type === 'num' ? this.numToCode(val) : this.codeToNum(val)
          this.setState({
            hint: hint,
            actual: {
              row: row,
              col: col
            }
          })        
          col++
          if (col === this.cols) {
            col = 0;
            row++;
          }
        }                    
      }, this.state.interval)       
    }
  
    onChangeInterval(event) {
      this.setState(
        {interval: event.target.value}
        );
    }
  
    render() {    
      const data = this.getRows(this.tableData);    
      return ( 
        <div className='container'>          
          <Timer start={this.start} interval={this.state.interval} onChangeInterval={this.onChangeInterval}/>
          <Task data={data}/>
          <Hint data={this.state.hint} />
        </div>
      )
    }
  }