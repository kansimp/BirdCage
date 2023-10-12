import { ShopContext } from '../../context/Shop-Context';
import { List } from './List';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

export const ShoppingCart = () => {
    const productArray = List();
    const { cartItem, calculateTotalPrice, calculateTotalQuantity } = useContext(ShopContext);
    const total = calculateTotalPrice(cartItem, List());
    const totalQuantityInCart = calculateTotalQuantity(cartItem, productArray);
    // console.log('cartItem', cartItem);
    // console.log('total', total);

    // Kiểm tra xem có sản phẩm trong giỏ hàng hay không
    const hasItemsInCart = Object.keys(cartItem).length > 0;

    return (
        <div className="cart">
            <div>
                <img className="image-head" src={images.product_header} alt="" />
                <div className="title">
                    <h1>Shopping Cart </h1>
                    <img src={images.hoa} alt="" />
                    <Link to="/products" className="Link">
                        Continue Shopping
                    </Link>
                </div>
            </div>
            <div className="cart-page">
                {hasItemsInCart && (
                    <div className="cart-header">
                        <div className="info">Product information </div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                )}
            </div>
            <div className="cartItems">
                {hasItemsInCart ? (
                    // Hiển thị danh sách sản phẩm nếu có sản phẩm trong giỏ hàng
                    productArray.map((product) => {
                        if (cartItem[product.id]) {
                            return <CartItem data={product} />;
                        }
                    })
                ) : (
                    // Hiển thị "Giỏ hàng rỗng" nếu không có sản phẩm trong giỏ hàng
                    <div className="empty-cart">
                        <div>This Cart is Empty</div>
                        <img src={images.hoa} alt="" />
                    </div>
                )}
            </div>

            {hasItemsInCart && (
                <div className="SubTotal">
                    <span className="text">SubTotal :</span>
                    <span className="value">{total}$</span>
                </div>
            )}
            {hasItemsInCart && <button className="btn-checkout"> Check out</button>}
        </div>
    );
};
