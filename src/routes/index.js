import Home from '../pages/Home';
import Products from '../pages/Products';
const publicRoute = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
];

const privateRoute = [];

export { publicRoute, privateRoute };
