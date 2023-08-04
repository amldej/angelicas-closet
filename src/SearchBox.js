import React from 'react';

const SearchBox = ({ searchChangeprop }) => {
	return (
		<div>
			<input 
			className='searchbox outline-0 br3 pa2 mb2 ba w-20 '
			type='Search' 
			placeholder='Search Closet' 
			onChange={searchChangeprop}
			/>
		</div>
	);
}

export default SearchBox;