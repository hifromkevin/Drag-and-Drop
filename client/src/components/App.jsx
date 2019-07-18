import React, { Component } from 'react';

import ListItem from './ListItem.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: ['Ford', 'Chevrolet', 'Mazda', 'Toyota', 'Honda', 'Dodge', 'BMW', 'Mercedes']
		}

		this.dragStart = this.dragStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.dragEnd = this.dragEnd.bind(this);
	}

	dragStart(e, idx) {
		this.draggedItem = this.state.list[idx];
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', e.target.parentNode);
		e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
	};

	dragOver(idx) {
		const draggedOverItem = this.state.list[idx];
		if (this.draggedItem === draggedOverItem) return;
		let items = this.state.list.filter(item => item !== this.draggedItem);
		items.splice(idx, 0, this.draggedItem);
		this.setState({ list: items });
	}

	dragEnd() {
		this.draggedItem = null;
	}

	render() {
		return(
			<div>
				<h1>My Favorite Car Brands</h1>
				<ol>
					{this.state.list.map((car, i) => {
						return <
							ListItem 
							car = { car } 
							key = { i } 
							idx = { i } 
							dragStart = { this.dragStart } 
							dragOver = { this.dragOver } 
							dragEnd = { this.dragEnd } 
						/>
					})}
				</ol>
			</div>
		);
	}
};