import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<>
				<Row>
					<Col style={{ backgroundColor: '#1e272e' }} className='text-center py-5'>
						Copyright 2021 &copy; Jack Van
					</Col>
				</Row>
			</>
		</footer>
	);
};

export default Footer;
