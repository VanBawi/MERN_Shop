import React from 'react';
import MacPro from '../images/wallpaperMacpro.jpeg';

const LandingImage = () => {
	return (
		<div>
			<img
				style={{ width: '100%', maxHeight: '95vh', marginTop: '-2rem', objectFit: 'cover' }}
				src={MacPro}
				alt='macpro'
			/>
			<div>
				<h2 className='text-centered-landing text-white'>
					Welcome to the future <br />
					TEch world. <br />
					<h2 className='text-white'>Things to explore.</h2>
				</h2>
			</div>
		</div>
	);
};

export default LandingImage;
