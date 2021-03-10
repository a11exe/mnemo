import React, {
  Component
} from 'react';
import { CodeToNum, ImageToNum, ListToNum, NumToCode, NumToImage } from '../pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Btn = ({url, label}) => {
  return (
    <Link to={url} className="btn btn-info mr-3">
      {label}
    </Link>  
  )
}

export default class App extends Component {

  

  render() {

    return (
      <div className='app'>
        <div className="container">
          <Router>

            <h2> Упражнения по буквенно-цифровому коду (БЦК)</h2>

             <div className="btn-toolbar">   
              <Btn url='/code-to-num' label='Буквы в числа'/>
              <Btn url='/num-to-code' label='Числа в буквы'/>
              <Btn url='/list-to-num' label='Числа по трем согласным'/>              
              <Btn url='/image-to-num' label='Образы в числа'/>
              <Btn url='/num-to-image' label='Числа в образы'/>
              
            </div>
            <Route path='/code-to-num' component={CodeToNum} />
            <Route path='/num-to-code' exact component={NumToCode} />
            <Route path='/list-to-num' exact component={ListToNum} />            
            <Route path='/image-to-num' component={ImageToNum} />            
            <Route path='/num-to-image' exact component={NumToImage} />

          </Router>
        </div>
      </div>


    )
  }
}