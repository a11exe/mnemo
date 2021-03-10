import React, {
    Component
  } from 'react';

export default class Hint extends Component {       

    render() {     
        return ( 
            <div id='hint' className='hint grey'>
                {this.props.data}
            </div>                       
        )
    }
}