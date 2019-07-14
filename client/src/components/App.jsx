import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			test: 'hi'
		}
	}

	render() {
		return(<div>{this.state.test}</div>);
	}
};