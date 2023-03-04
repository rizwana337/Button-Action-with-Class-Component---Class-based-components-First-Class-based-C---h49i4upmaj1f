import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			show:false
		}
	};
onIncrementClickHandler=()=> {
        // console.log("on click handler called");
        // console.log(this);
        this.setState({show:!this.state.show});
                };
			//	{age:this.state.age+1}	
    render() {
    	return(
    		<div id="main">
				{
        this.state.show ? <h1 id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</h1> : null
      }
      <button id='click' onClick={this.onIncrementClickHandler}>button</button>
    </div>
	    	);
    }
}


export default App;

