import type { Pizza } from './MenuItem';
import { getMenu } from '../../services/apiRestaurants';

export async function loader() {
	const menu: Pizza[] = await getMenu();
	return menu;
}
