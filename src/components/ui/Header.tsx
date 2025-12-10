import { Link } from 'react-router';

import SearchOrder from '../order/SearchOrder'

export default function Header() {
	return (
		<header>
			<Link to='/'>Rocket Pizza Co.</Link>

			<SearchOrder />

			<p>Welcome, VIKTOR</p>
		</header>
	);
}
