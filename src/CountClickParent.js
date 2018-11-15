import React, { Component } from 'react';
import CountClickChild from './CountClickChild'

class CountClickParent extends Component{
    state = {count: 0};
    clickHandler = () =>{
    this.setState({count: this.state.count+1});
    console.log("Increment by 1")
}
    render(){
        return <div>
                    <p>{this.state.count}</p>
                    <CountClickChild clickHandler={this.clickHandler} />
            </div>
    }
    
}

export default CountClickParent;