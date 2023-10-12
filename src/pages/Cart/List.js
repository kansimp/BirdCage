import { useState, useEffect } from 'react';
/// thay đổi bên này thành lấy api từ cái cart
export const List = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((product) => {
                setProducts(product);
            });
    }, []);
    const productArray = products.map((item) => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.product_image,
        };
    });
    return productArray;
};
