import { useState } from 'react';

export function CreateUser() {
	const [username, setUsername] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>👋 Welcome! Please start by telling us your name:</p>

			<input
				type='text'
				placeholder='Your full name'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>

			{username !== '' && (
				<div>
					<button type='submit'>Start ordering</button>
				</div>
			)}
		</form>
	);
}
