import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import images from '../../../assets/images';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
let productsSale = [];
function BestSeller() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((product) => {
                setProducts(product);
            });
    }, []);
    if (products.length > 0) {
        productsSale = products.filter((p, index) => p.id >= 30 && p.id <= 39);
    }
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('text')}>
                    <h2 className={cx('title')}>BestSeller</h2>
                    <img src={images.hoa}></img>
                </div>
                <div className={cx('thumb-wrapper')}>
                    {productsSale.length > 0 &&
                        productsSale.map((p, index) => {
                            return (
                                <Link to={`/product/${p.id}`} className={cx('thumb')} key={index}>
                                    <div className={cx('thumb-img')}>
                                        <img src={p.product_image}></img>
                                    </div>
                                    <h4 className={cx('title')}>{p.name}</h4>
                                    <span className={cx('price')}>{p.price}$</span>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
