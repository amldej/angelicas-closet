import React from 'react';

const PinnedItems = ({ pinneditems, handleUnpin }) => {
	return ( 
		<div>
			{pinneditems.map((item, i) => (
        		<div className='tc dib br3 pa2 ma2 shadow-4 w-30 ba b--light-blue' 
        			key={pinneditems[i].id}> 
					<div>
						<img alt='item' src= {require(`./images/${pinneditems[i].image}`)} />
						<h2 className='f5 ma1'>{pinneditems[i].name}</h2>			
						<h3 className='unpin f6 ma1 di pointer gray' 
							onClick={() => handleUnpin(pinneditems[i].id)}>unpin</h3>
					</div>
				</div>
			))}
		</div>
	);

}

export default PinnedItems;