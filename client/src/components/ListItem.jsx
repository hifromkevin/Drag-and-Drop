import React from 'react';

const ListItem = ({ car, idx, dragStart, dragOver, dragEnd }) => {
	return(
		<li onDragOver = { () => dragOver(idx) } >
			<div 
				className="drag"
				draggable
				onDragStart = { e => dragStart(e, idx) }
				onDragEnd = { dragEnd }
			>
				{car}
			</div>
		</li>
	)
};

export default ListItem;