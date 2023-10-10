import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Compare.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);
function Compare() {
    let productID = useParams();
    const [selectProduct, setSelectProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const handelCompare = (id) => {
        setSelectProduct((prefix) => [...prefix, id]);
    };
    useEffect(() => {
        if (!selectProduct.includes(productID)) {
            setSelectProduct((prefix) => [...prefix, productID.productID]);
        }
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((product) => {
                setProducts(product);
            });
    }, [productID]);
    if (selectProduct.length < 3 && products.length > 0) {
        // console.log('pro', products);
        return (
            <div className={cx('thumb-wrapper')}>
                {products.map((p, index) => {
                    return (
                        <div className={cx('thumb')} key={index} onClick={() => handelCompare(p.id)}>
                            <div className={cx('thumb-img')}>
                                <img src={p.product_image}></img>
                            </div>
                            <h4 className={cx('title')}>{p.name}</h4>
                            <span className={cx('price')}>{p.price}$</span>
                        </div>
                    );
                })}
            </div>
        );
    }
    // console.log(selectProduct);
    // console.log('products', products);
    if (selectProduct.length >= 3 && products.length > 0) {
        // console.log('select Pro', selectProduct);
        // console.log('p1', products[selectProduct[1] - 1]);
        // console.log('p2', products[selectProduct[2] - 1]);
        let p1 = products[selectProduct[1] - 1];
        let p2 = products[selectProduct[2] - 1];
        return (
            <div className={cx('container')}>
                <img src={images.product_header} style={{ width: 100 + '%', height: 330 + 'px' }}></img>
                <div className={cx('content')}>
                    <table>
                        <tr>
                            <td className={cx('title')}></td>
                            <td>
                                <img src={p1.product_image}></img>
                            </td>
                            <td>
                                <img src={p2.product_image}></img>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('title')}>Name</td>
                            <td>{p1.name}</td>
                            <td>{p2.name}</td>
                        </tr>
                        <tr>
                            <td className={cx('title')}>Price</td>
                            <td>{p1.price}$</td>
                            <td>{p2.price}$</td>
                        </tr>
                        <tr>
                            <td className={cx('title')}>Description</td>
                            <td>{p1.description}</td>
                            <td>{p2.description}</td>
                        </tr>

                        <tr>
                            <td className={cx('title')}>Amount</td>
                            <td>{p1.amount}</td>
                            <td>{p2.amount}</td>
                        </tr>
                        <tr>
                            <td className={cx('title')}>Guarantee</td>
                            <td>9 month</td>
                            <td>9 month</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Compare;
