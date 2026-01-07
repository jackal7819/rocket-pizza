import { redirect } from 'react-router';

import type { Order } from './Order';
import { createOrder } from '../../services/apiRestaurants';

const isValidPhone = (str: string) =>
	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

export async function action({ request }: { request: Request }) {
	const formData = await request.formData();

	const customer = formData.get('customer');
	const phone = formData.get('phone');
	const address = formData.get('address');
	const cart = formData.get('cart');
	const priority = formData.get('priority');

	if (
		typeof customer !== 'string' ||
		typeof phone !== 'string' ||
		typeof address !== 'string' ||
		typeof cart !== 'string'
	) {
		throw new Error('Invalid form data');
	}

	const errors: { phone?: string } = {};

	if (!isValidPhone(phone)) {
		errors.phone = 'Please give us your correct phone number. We might need it to contact you.';
	}

	if (Object.keys(errors).length > 0) {
		return errors;
	}

	const order = {
		customer,
		phone,
		address,
		cart: JSON.parse(cart),
		priority: priority === 'on',
	};

	const newOrder: Order = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}
