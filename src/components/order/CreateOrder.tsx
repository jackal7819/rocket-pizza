import { Form } from 'react-router';
import { useState } from 'react';

interface CartItem {
	pizzaId: number;
	name: string;
	quantity: number;
	unitPrice: number;
	totalPrice: number;
}

// const isValidPhone = (str: string) =>
// 	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
	{
		pizzaId: 12,
		name: 'Mediterranean',
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32,
	},
	{
		pizzaId: 6,
		name: 'Vegetarian',
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13,
	},
	{
		pizzaId: 11,
		name: 'Spinach and Mushroom',
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15,
	},
];

export default function CreateOrder() {
	const [withPriority, setWithPriority] = useState(false);
	const cart: CartItem[] = fakeCart;

	return (
		<div>
			<h2>Ready to order? Let's go!</h2>

			<Form method='POST'>
				<div>
					<label htmlFor='customer'>First Name</label>
					<input id='customer' type='text' name='customer' required autoComplete='off' />
				</div>

				<div>
					<label htmlFor='phone'>Phone number</label>
					<div>
						<input id='phone' type='tel' name='phone' required autoComplete='off' />
					</div>
				</div>

				<div>
					<label htmlFor='address'>Address</label>
					<div>
						<input
							id='address'
							type='text'
							name='address'
							required
							autoComplete='off'
						/>
					</div>
				</div>

				<div>
					<input
						type='checkbox'
						name='priority'
						id='priority'
						autoComplete='off'
						value={withPriority ? 'on' : 'off'}
						onChange={(event) => setWithPriority(event.target.checked)}
					/>
					<label htmlFor='priority'>Want to yo give your order priority?</label>
				</div>

				<div>
					<input type='hidden' name='cart' value={JSON.stringify(cart)} />
					<button type='submit'>Order now</button>
				</div>
			</Form>
		</div>
	);
}
