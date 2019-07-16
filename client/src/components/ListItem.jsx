import React from 'react';

const ListItem = ({car, idx, onDragStart}) => {
	return(
		<li>
			<div 
				className="drag"
				draggable
				onDragStart = {e => onDragStart(e, idx)}
			>
				{car}
			</div>
		</li>
	)
};

export default ListItem;