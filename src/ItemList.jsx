import React from 'react';

const ItemList = ({ itemsprop, handleDelete, handlePin }) => {
	return ( 
		<div>
			{itemsprop.map((item, i) => (
        		<div className='item-list tc dib br3 pa2 ma2 grow shadow-4 w-30 pin pointer' 
        			key={itemsprop[i].id}> 
					<div>
						<img 
						alt='item' 
						src= {require(`./images/${itemsprop[i].image}`)} 
						onClick={() => handlePin(itemsprop[i].id)}/>
						<h2 className='f5 ma1'>{itemsprop[i].name}</h2>
						<h3 className='hide f6 ma1 di pointer gray' 
							onClick={() => handleDelete(itemsprop[i].id)}>hide</h3>
					</div>
				</div>
			))}
		</div>
	);

}
// 

export default ItemList;