import { Outlet, useNavigation } from 'react-router';

import CartOverview from '../cart/CartOverview';
import Header from './Header';
import Spinner from './Spinner';

export default function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='layout'>
			<Header />

			<main>
				<Outlet />
			</main>

			<CartOverview />
		</div>
	);
}
