import React from 'react';
import ReactDOM from 'react-dom';

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
	componentWillUnmount() {
		console.log('bye!');
	}
	render() {
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}
}

class Wrapper extends React.Component {
	constructor() {
		super();
	}
	mount() {
		console.log('inside Wrapper mount()')
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount() {
		console.log('inside Wrapper unmount()')
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>UnMount</button>
				<div id="a"></div>
			</div>
		)
	}
}

// Export Wrapper (not App), since we are loading App from the Wrapper
export default Wrapper
