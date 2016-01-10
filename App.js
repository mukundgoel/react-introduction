import React from 'react';
import ReactDOM from 'react-dom';

// uncomment this when loading from main.js
//import App from './App'

// This is a stateful component
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			// set initial state to 0 for all 3 Sliders
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render() {
		//let txt = this.props.txt;
		//let cat = this.props.cat;
		// <h1>{txt} ({cat})</h1>
		// App is parent React component, and Widget is child component
		return (
			<div>
				<Slider ref='red' update={this.update} />
				{this.state.red}
				<br />
				<Slider ref='green' update={this.update} />
				{this.state.green}
				<br />
				<Slider ref='blue' update={this.update} />
				{this.state.blue}
				<br />
			</div>
		)
	}
}

// This is a stateless component (has no state)
//const App = () => <h1>Hello World from Stateless Component</h1>

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default txt',
	cat: 5
}

class Slider extends React.Component {
	render() {
		return (
			<input type='range'
				min='0'
				max='255'
				onChange={this.props.update} />
		)
	}
}

ReactDOM.render(
	<App txt='this is the props value'/>,
	document.getElementById('app')
);
