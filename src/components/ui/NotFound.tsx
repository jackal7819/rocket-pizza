import { useNavigate, useRouteError } from 'react-router';

interface RouteError {
	status?: number;
	statusText?: string;
	data?: string;
	message?: string;
}

export default function NotFound() {
	const navigate = useNavigate();
	const error = useRouteError() as RouteError;

	return (
		<div>
			<h1>Something went wrong 😢</h1>

			<p>{error?.data ?? error?.message ?? 'Unknown error'}</p>

			<button type='button' onClick={() => navigate(-1)}>
				&larr; Go back
			</button>
		</div>
	);
}
