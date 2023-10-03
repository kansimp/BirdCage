import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);
function ProductDetail() {
    const productID = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((products) => {
                const findUser = products.find((p) => {
                    return p.id == productID.productID;
                });
                if (findUser) {
                    setProduct(findUser);
                }
            });
    }, [productID]);
    if (!product) {
        return <div>This product is not found</div>;
    }
    return (
        <div className={cx('container')}>
            <img src={images.product_header} style={{ width: 100 + '%', height: 330 + 'px' }}></img>
            <div className={cx('content')}>
                <img src={product.product_image} className={cx('product-img')}></img>
                <div className={cx('text')}>
                    <div className={cx('title')}>{product.name}</div>
                    <div className={cx('shop')}>
                        <div className={cx('price')}>{product.price}$</div>
                        <div className={cx('shopping-cart')}>
                            <FontAwesomeIcon icon={faCartPlus} className={cx('icon')}></FontAwesomeIcon>
                            <div className={cx('text_1')}>
                                <div>ADD TO CART</div>
                                <div className={cx('free')}>Free delivery to your location</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('description')}>Describe :</div>
                    <div className={cx('des')}>{product.description}</div>
                    <div className={cx('support')}>
                        <div className={cx('support-item')}>
                            <img src={images.support1} style={{ width: 40 + 'px', height: 40 + 'px' }}></img>
                            <div className={cx('text')}>
                                <h4 className={cx('title')}>Free Ship</h4>
                                <p className={cx('des')}>Free ship applies to all orders over $200</p>
                            </div>
                        </div>
                        <div className={cx('support-item')}>
                            <img src={images.support2} style={{ width: 40 + 'px', height: 40 + 'px' }}></img>
                            <div className={cx('text')}>
                                <h4 className={cx('title')}>Easy to Return</h4>
                                <p className={cx('des')}>Return immediately if the product is incorrect or damaged</p>
                            </div>
                        </div>
                        <div className={cx('support-item')}>
                            <img src={images.support3} style={{ width: 40 + 'px', height: 40 + 'px' }}></img>
                            <div className={cx('text')}>
                                <h4 className={cx('title')}>Quick Support</h4>
                                <p className={cx('des')}>Contact customer care right on the website</p>
                            </div>
                        </div>
                        <div className={cx('support-item')}>
                            <img src={images.support4} style={{ width: 40 + 'px', height: 40 + 'px' }}></img>
                            <div className={cx('text')}>
                                <h4 className={cx('title')}>Diverse Payments</h4>
                                <p className={cx('des')}>Payment upon delivery, bank transfer, momo,...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
