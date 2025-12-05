import { formatCurrency } from '../../utils/helpers';

interface CartItemProps {
	item: {
		pizzaId: number;
		name: string;
		quantity: number;
		unitPrice: number;
		totalPrice: number;
	};
}

export default function CartItem({ item }: CartItemProps) {
	const { pizzaId, name, quantity, totalPrice } = item;

	return (
		<li>
			<p>
				{quantity}&times; {name} {pizzaId}
			</p>
			<div>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}
