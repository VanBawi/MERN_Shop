import React from 'react';
import MacPro from '../images/wallpaperMacpro.jpeg';

const LandingImage = () => {
	return (
		<div>
			<img
				style={{ width: '100%', maxHeight: '70vh', marginTop: '-2rem', objectFit: 'cover' }}
				src={MacPro}
				alt='macpro'
			/>
			<h1 className='text-centered'>Welcome to the future TEch world.</h1>
		</div>
	);
};

export default LandingImage;
