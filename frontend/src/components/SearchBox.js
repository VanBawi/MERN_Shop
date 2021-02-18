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
					placeholder='Search'
					type='text'
					name='q'
					onChange={(e) => setKeyword(e.target.value)}
					style={{ width: '20rem', borderRadius: '17px 0px 0px 17px' }}
				/>
				<InputGroup.Append>
					<Button
						type='submit'
						style={{ padding: '0.3rem', background: '#888', borderRadius: '0px 17px 17px 0' }}>
						<i className='fa fa-search px-2'></i>
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
};

export default SearchBox;
