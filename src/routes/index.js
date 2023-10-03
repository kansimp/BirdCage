import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/product/:productID', component: ProductDetail },
];

const privateRoute = [];

export { publicRoute, privateRoute };
