import React from 'react';
import ReactDOM from 'react-dom';

// uncomment this when loading from main.js
//import App from './App'

// This is a stateful component
class App extends React.Component {
	render() {
		let txt = this.props.txt;
		let cat = this.props.cat;
		return <h1>{txt} ({cat})</h1>
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

ReactDOM.render(
	<App txt='this is the props value'/>,
	document.getElementById('app')
);
