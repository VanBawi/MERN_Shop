import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<div className='py-2 my-3 product-image'>
			<div className='product-image-card'>
				<Link to={`/product/${product._id}`}>
					<Card.Img
						style={{
							height: '200px',
							width: '250px',
							objectFit: 'contain',
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							margin: '0 auto',
						}}
						src={product.image}
					/>
				</Link>

				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as='div'>
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>

					<Card.Text style={{ color: '#f57224' }} as='h4'>
						RM{product.price}
					</Card.Text>
					<Card.Text as='div'>
						<Rating value={product.rating} text={`(${product.numReviews})`} />
					</Card.Text>
				</Card.Body>
			</div>
		</div>
	);
};

export default Product;
