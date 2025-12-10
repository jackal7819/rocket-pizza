import { RouterProvider, createBrowserRouter } from 'react-router';

import AppLayout from './components/ui/AppLayout';
import Cart from './components/cart/Cart';
import CreateOrder from './components/order/CreateOrder';
import Home from './components/ui/Home';
import Menu from './components/menu/Menu';
import NotFound from './components/ui/NotFound';
import Order from './components/order/Order';
import { loader as menuLoader } from './components/menu/loader';
import { loader as orderLoader } from './components/order/loader';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
				loader: menuLoader,
				errorElement: <NotFound />,
			},
			{ path: '/cart', element: <Cart /> },
			{ path: '/order/new', element: <CreateOrder /> },
			{
				path: '/order/:orderId',
				element: <Order />,
				loader: orderLoader,
				errorElement: <NotFound />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
