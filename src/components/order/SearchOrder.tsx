import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function SearchOrder() {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				aria-label='query'
				name='query'
				type='text'
				autoComplete='off'
				placeholder='Search order #'
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
		</form>
	);
}
