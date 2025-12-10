import { redirect } from 'react-router';

import type { Order } from './Order';
import { createOrder } from '../../services/apiRestaurants';

export async function action({ request }: { request: Request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const cartField = data.cart;

	if (typeof cartField !== 'string') {
		throw new Error('Invalid cart value');
	}

	const order = {
		...data,
		cart: JSON.parse(cartField),
		priority: data.priority === 'on',
	};

	const newOrder: Order = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}
