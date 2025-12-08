import { formatCurrency } from '../../utils/helpers';

export interface Pizza {
	id: number;
	name: string;
	unitPrice: number;
	ingredients: string[];
	soldOut: boolean;
	imageUrl: string;
}

interface MenuItemProps {
	pizza: Pizza;
}

export default function MenuItem({ pizza }: MenuItemProps) {
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

	return (
		<li>
			<img src={imageUrl} alt={name} />
			<div>
				<p>
					{id}. {name}
				</p>
				<p>{ingredients.join(', ')}</p>
				<div>{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}</div>
			</div>
		</li>
	);
}
