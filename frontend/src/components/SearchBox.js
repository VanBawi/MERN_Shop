import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<Form className='mr-5' onSubmit={submitHandler} inline>
			<InputGroup>
				<FormControl
					variant='outlined'
					placeholder='Search'
					type='text'
					name='q'
					onChange={(e) => setKeyword(e.target.value)}
					style={{ width: '20rem' }}
				/>
				<InputGroup.Append>
					<Button type='submit' style={{ padding: '0.5rem', background: '#000' }}>
						<i className='fa fa-search'></i>
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
};

export default SearchBox;
