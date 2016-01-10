import React from 'react';
import ReactDOM from 'react-dom';

// uncomment this when loading from main.js
//import App from './App'

// This is a stateful component
class App extends React.Component {
	constructor() {
		super();
		this.state = { txt: 'this is the state txt'}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({txt: e.target.value})
	}
	render() {
		//let txt = this.props.txt;
		//let cat = this.props.cat;
		// <h1>{txt} ({cat})</h1>
		// App is parent React component, and Widget is child component
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
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

// creating another React component
// should go in another file, but here it is fine for our purposes
const Widget = (props) => {
			return (
			<div>
				<input type="text" onChange={props.update} />
				<h1>{props.txt}</h1>
			</div>
		);
}

ReactDOM.render(
	<App txt='this is the props value'/>,
	document.getElementById('app')
);
