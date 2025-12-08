import { RouterProvider, createBrowserRouter } from 'react-router';

import AppLayout from './components/ui/AppLayout';
import Cart from './components/korb/Cart';
import CreateOrder from './components/order/CreateOrder';
import Home from './components/ui/Home';
import Menu from './components/menu/Menu';
import Order from './components/order/Order';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
			},
			{ path: '/cart', element: <Cart /> },
			{ path: '/order/new', element: <CreateOrder /> },
			{ path: '/order/:orderId', element: <Order /> },
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
