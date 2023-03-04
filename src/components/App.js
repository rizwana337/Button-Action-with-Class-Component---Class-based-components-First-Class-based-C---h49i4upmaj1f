import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			show:false
		}
	};

    render() {
    	return(
    		<div id="main">
				{
        this.state.show ? <h1 id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</h1> : null
      }
      <button id='click' onClick={() => { this.setShow(!this.state.show) }}>button</button>
    </div>
	    	);
    }
}


export default App;

