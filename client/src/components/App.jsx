import React, { Component } from 'react';

import ListItem from './ListItem.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: ['Ford', 'Chevrolet', 'Mazda', 'Toyota', 'Honda', 'Dodge', 'BMW', 'Mercedes']
		}
	}

	render() {
		return(
			<div>
				<h1>My Favorite Car Brands</h1>
				<ol>
					{this.state.list.map((car, i) => {
						return <ListItem car={car} key={i} />
					})}
				</ol>
			</div>
		);
	}
};