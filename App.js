import React from 'react';

// This is a stateful component
class App extends React.Component {
	render() {
		return (
			<div>
				<b>Hello</b>
				<h1>Hello World from State Component</h1>
			</div>
		);
	}
}

// This is a stateless component (has no state)
//const App = () => <h1>Hello World from Stateless Component</h1>

export default App
