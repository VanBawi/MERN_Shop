import React from 'react';
import MacPro from '../images/macbook-pro-bg.jpg';

const LandingImage = () => {
	return (
		<div style={{ marginTop: '-2rem' }}>
			<img
				style={{ width: '100%', minHeight: '95vh', objectFit: 'cover' }}
				src={MacPro}
				alt='mac pro'
			/>
			<div>
				<h1 className='text-centered-landing text-white '>
					Welcome to the future Tech world. <br />
					<h2 className='text-white py-5'>Things to explore.</h2>
				</h1>
			</div>
		</div>
	);
};

export default LandingImage;
