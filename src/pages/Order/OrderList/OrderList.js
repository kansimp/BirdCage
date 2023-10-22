import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../../context/Shop-Context';
import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import axios from 'axios';
import { Order } from '../Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const OrderList = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsReady, setProductsReady] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shipping, setShipping] = useState(0);

    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm
        axios.get('http://localhost:8080/api/v1/product').then((response) => {
            setProducts(response.data);
            setProductsReady(true); // Đánh dấu rằng dữ liệu sản phẩm đã sẵn sàng
            console.log(products);
        });

        // Lấy dữ liệu từ Local Storage
        const cartData = JSON.parse(localStorage.getItem('shopCart'));
        console.log('cartData', cartData);

        const updatedCartItems = [];
        let totalQuantity = 0;
        let totalPrice = 0;
        //  truy xuất thông tin nếu dữ liệu  true
        if (productsReady) {
            for (const productId in cartData) {
                if (cartData.hasOwnProperty(productId)) {
                    const product = products.find((p) => p.id == productId);
                    console.log('productss', product);
                    if (product) {
                        const quantity = cartData[productId];
                        const totalproductPrice = product.price * quantity;
                        // console.log(totalproductPrice);
                        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
                        setTotalPrice((prevTotalPrice) => prevTotalPrice + totalproductPrice);

                        updatedCartItems.push({
                            id: productId,
                            name: product.name,
                            price: product.price,
                            quantity,
                            totalproductPrice,
                            image: product.product_image,
                        });
                        console.log('price', updatedCartItems.price);
                    }
                }
            }
        }

        setOrderItems(updatedCartItems);
    }, [productsReady]);
    const sum = (a, b) => a + b;
    return (
        <div className={cx('order')}>
            <h2 className={cx('title')}>Order ({totalQuantity} products)</h2>
            <div className={cx('order-item')}>
                {orderItems.map((item) => (
                    <div className={cx('content')}>
                        <div className={cx('left-content')}>
                            <div className={cx('quantity')}>
                                <div className={cx('quantity-number')}>{item.quantity}</div>
                            </div>
                            <div className={cx('description')}>
                                <div className={cx('image')}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={cx('name')}>{item.name}</div>
                            </div>
                        </div>
                        <div className={cx('right-content')}>
                            <div className={cx('description')}>{item.price}$</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('divider')}></div>
            <div className={cx('content-footer')}>
                <div className={cx('content-footer-estimated')}>
                    <span className={cx('content-footer-estimated-title')}>Estimated Price :</span>
                    <span className={cx('content-footer-estimated-price')}>{totalPrice}$</span>
                </div>
                <div className={cx('content-footer-ship')}>
                    <span className={cx('content-footer-ship-title')}>Shipping Fee :</span>
                    <span className={cx('content-footer-ship-price')}>{totalQuantity >= 3 ? 7 : 0}$</span>
                </div>
                <div className={cx('divider')}></div>
                <div className={cx('content-footer-total')}>
                    <span className={cx('content-footer-total-title')}>Total :</span>
                    <span className={cx('content-footer-total-price')}>
                        {sum(totalPrice, totalQuantity >= 3 ? 7 : 0)}$
                    </span>
                </div>
                <div className={cx('content-footer-btn')}>
                    <div className={cx('content-footer-btn-link')}>
                        <Link to={'/Cart'} className={cx('content-footer-btn-link-title')}>
                            <span className={cx('content-footer-btn-link-icon')}>
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </span>
                            Back to cart
                        </Link>
                    </div>

                    <button className={cx('content-footer-btn-order')}>Order</button>
                </div>
            </div>
        </div>
    );
};
export default OrderList;
