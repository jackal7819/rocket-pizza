import { formatCurrency } from '../../utils/helpers';

interface OrderItemProps {
	item: {
		quantity: number;
		name: string;
		totalPrice: number;
	};
	isLoadingIngredients: boolean;
	ingredients: string[];
}

export default function OrderItem({ item, isLoadingIngredients, ingredients }: OrderItemProps) {
	const { quantity, name, totalPrice } = item;
	console.log(isLoadingIngredients, ingredients);

	return (
		<li>
			<div>
				<p>
					<span>{quantity}&times;</span> {name}
				</p>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}
