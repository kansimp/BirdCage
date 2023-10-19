import { useState, useEffect } from 'react';
import { createContext } from 'react';
export const ShopContext = createContext(null);
// lay san pham o trang thai mac dinh
let listProducts = [];
const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/product')
            .then((res) => res.json())
            .then((product) => {
                setProducts(product);
            });
    }, []);
    if (products.length > 0) {
        listProducts = products;
        return listProducts;
    }
    return listProducts;
};
var Listlenght = 0;
const getDefaultCart = () => {
    Listlenght = List().length;
    console.log('Listlenght', Listlenght);
    let cart = {};
    for (let i = 1; i < Listlenght + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};
// lay du lieu ra và đẩy ra
const DefaultCart = () => {
    const cartItem = localStorage.getItem('shopCart');
    return cartItem ? JSON.parse(cartItem) : getDefaultCart;
};

export const ShopContextProvider = (props) => {
    const [cartItem, setcartItem] = useState(DefaultCart());
    // set local len server
    useEffect(() => {
        localStorage.setItem('shopCart', JSON.stringify(cartItem));
    }, [cartItem]);
    const addToCart = (productID) => {
        setcartItem((prevCart) => {
            // Sao chép giỏ hàng hiện tại để tránh thay đổi trực tiếp
            const updatedCart = { ...prevCart };

            // Kiểm tra xem productID đã có trong giỏ hàng chưa
            if (updatedCart[productID]) {
                updatedCart[productID] += 1; // Tăng số lượng nếu sản phẩm đã có trong giỏ hàng
                console.log(`Sản phẩm với ID ${productID} đã được thêm vào giỏ hàng.`);
            } else {
                updatedCart[productID] = 1; // Thêm sản phẩm vào giỏ hàng nếu chưa có
            }

            return updatedCart;
        });
    };
    // hảm giảm số lượng từ cart
    const removeFromCart = (productID) => {
        setcartItem((prevCart) => {
            // Sao chép giỏ hàng hiện tại để tránh thay đổi trực tiếp
            const updatedCart = { ...prevCart };

            // Kiểm tra xem productID có có trong giỏ hàng không
            if (updatedCart[productID]) {
                if (updatedCart[productID] === 1) {
                    // Nếu số lượng sản phẩm là 1, loại bỏ sản phẩm khỏi giỏ hàng
                    delete updatedCart[productID];
                } else {
                    // Giảm số lượng sản phẩm đi 1 nếu số lượng lớn hơn 1
                    updatedCart[productID] -= 1;
                }
            } else {
                console.log(`Sản phẩm với ID ${productID} không có trong giỏ hàng.`);
            }

            return updatedCart;
        });
    };
    // hàm xóa luôn sản phẩm ra giỏ
    const deleteFromCart = (productID) => {
        setcartItem((prevCart) => {
            // Sao chép giỏ  hiện tại để tránh thay đổi trực tiếp
            const updatedCart = { ...prevCart };

            // Kiểm tra xem productID có  trong giỏ  không
            if (updatedCart[productID]) {
                // Xóa sản phẩm khỏi giỏ
                delete updatedCart[productID];
            } else {
                console.log(`Sản phẩm với ID ${productID} không có trong giỏ .`);
            }

            return updatedCart;
        });
    };
    // cập nhật số lượng sản phẩm
    const updateCartItemQuantity = (newQuantity, productID) => {
        setcartItem((prevCart) => ({ ...prevCart, [productID]: newQuantity }));
    };
    // tính tổng
    const calculateTotalPrice = (cartItem, products) => {
        let total = 0;

        // Lặp qua tất cả các sản phẩm trong giỏ hàng
        for (const productId in cartItem) {
            if (cartItem.hasOwnProperty(productId)) {
                // Lấy số lượng của sản phẩm và giá của sản phẩm từ giỏ hàng và danh sách sản phẩm
                const productQuantity = cartItem[productId];

                const product = products.find((p) => p.id == productId);

                if (product) {
                    // Tính tổng tiền cho sản phẩm và cộng vào tổng số tiền

                    total += product.price * productQuantity;
                }
            }
        }

        return total;
    };
    //  Tính tổng số lượng tất cả sản phẩm có trong giỏ
    const calculateTotalQuantity = (cartItem, products) => {
        let totalQuantity = 0;

        // Lặp qua tất cả các sản phẩm trong giỏ hàng
        for (const productId in cartItem) {
            if (cartItem.hasOwnProperty(productId)) {
                // Lấy số lượng của sản phẩm từ giỏ hàng
                const productQuantity = cartItem[productId];

                // Cộng số lượng sản phẩm vào tổng số lượng
                totalQuantity += productQuantity;
            }
        }

        return totalQuantity;
    };

    const contextValue = {
        cartItem,
        addToCart,
        removeFromCart,
        deleteFromCart,
        updateCartItemQuantity,
        calculateTotalPrice,
        calculateTotalQuantity,
    };
    // console.log('cart', getDefaultCart());
    console.log('cart', cartItem);
    return <ShopContext.Provider value={contextValue}> {props.children}</ShopContext.Provider>;
};
