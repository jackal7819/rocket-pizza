import { useLoaderData } from 'react-router';

import MenuItem, { type Pizza } from './MenuItem';

export default function Menu() {
	const menu: Pizza[] = useLoaderData();

	return (
		<ul>
			{menu.map((pizza) => (
				<MenuItem key={pizza.id} pizza={pizza} />
			))}
		</ul>
	);
}
