import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Compare from '../pages/Compare';
import { ShoppingCart } from '../pages/Cart/ShoppingCart';
import LoginPage from '../pages/LoginAccount';
import RegisterPage from '../pages/RegisterAccount';
import ForgotPassword from '../pages/ForgotPassword';
import DefaultLayout from '../components/layout/DefaultLayout';
import UserInfo from '../pages/UserInfo';
import AdminHome from '../pages/Admin/AdminHome/AdminHome';
import { Order } from '../pages/Order/Order';

const publicRoute = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/products', component: Products, layout: DefaultLayout },
    { path: '/product/:productID', component: ProductDetail, layout: DefaultLayout },
    { path: '/compare/:productID', component: Compare, layout: DefaultLayout },
    { path: '/Cart', component: ShoppingCart, layout: DefaultLayout },
    { path: '/info', component: UserInfo, layout: UserInfo },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/register', component: RegisterPage, layout: null },
    { path: '/forgot', component: ForgotPassword, layout: null },
    { path: '/admin', component: AdminHome, layout: null },
    { path: '/order', component: Order, layout: null },
];

const privateRoute = [];
export { publicRoute, privateRoute };
