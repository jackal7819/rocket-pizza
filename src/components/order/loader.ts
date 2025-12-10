import type { LoaderFunctionArgs } from 'react-router';

import type { Order } from './Order';
import { getOrder } from '../../services/apiRestaurants';

export async function loader({ params }: LoaderFunctionArgs) {
	const orderId = params.orderId;

	if (!orderId) {
		throw new Error('Order ID is missing');
	}

	const order: Order = await getOrder(orderId);
	return order;
}
