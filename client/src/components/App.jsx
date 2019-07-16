import React, { Component } from 'react';

import ListItem from './ListItem.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: ['Ford', 'Chevrolet', 'Mazda', 'Toyota', 'Honda', 'Dodge', 'BMW', 'Mercedes']
		}

		this.onDragStart = this.onDragStart.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
	}

	onDragStart(e, idx) {
		this.draggedItem = this.state.list[idx];
		console.log(this.draggedItem)
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', e.target.parentNode);
		e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
	};

	onDragOver(idx) {
		const draggedOverItem = this.state.list[idx];
	}

	render() {
		return(
			<div>
				<h1>My Favorite Car Brands</h1>
				<ol>
					{this.state.list.map((car, i) => {
						return <ListItem car={car} key={i} idx={i} onDragStart={this.onDragStart} />
					})}
				</ol>
			</div>
		);
	}
};