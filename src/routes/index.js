import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Compare from '../pages/Compare';
import { ShoppingCart } from '../pages/Cart/ShoppingCart';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/product/:productID', component: ProductDetail },
    { path: '/compare/:productID', component: Compare },
    { path: '/Cart', component: ShoppingCart },
];

const privateRoute = [];
export { publicRoute, privateRoute };
