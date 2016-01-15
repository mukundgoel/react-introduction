import React from 'react';
import ReactDOM from 'react-dom';

// uncomment this when loading from main.js
//import App from './App'

// This is a stateful component
class App extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 }
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({ val: this.state.val + 1 })
	}
	componentWillMount() {
		// component is fully preped and guaranteed to make it into DOM
		console.log('mounting');
	}
	componentDidMount() {
		console.log('mounted');
	}
	render() {
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}
}

export default App
