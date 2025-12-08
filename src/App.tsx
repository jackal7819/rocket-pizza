import { RouterProvider, createBrowserRouter } from 'react-router';

import AppLayout from './components/ui/AppLayout';
import Cart from './components/cart/Cart';
import CreateOrder from './components/order/CreateOrder';
import Home from './components/ui/Home';
import Menu from './components/menu/Menu';
import Order from './components/order/Order';
import { loader as menuLoader } from './components/menu/loader';

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
				loader: menuLoader,
			},
			{ path: '/cart', element: <Cart /> },
			{ path: '/order/new', element: <CreateOrder /> },
			{ path: '/order/:orderId', element: <Order /> },
		],
	},
]);

export default function App() {
	return <RouterProvider
  router={router}
/>;
}
