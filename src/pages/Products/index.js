import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';
import images from '../../assets/images';
import ListProducts from '../../components/layout/ListProducts';

const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('container')}>
            <img src={images.product_header} style={{ width: 100 + '%', height: 330 + 'px' }}></img>
            <div className={cx('allproduct')}>All Products</div>
            <div className={cx('content')}>
                {/* 4 sản phẩm đầu tiên */}
                <div className={cx('thumb-wrapper')}>
                    <div className={cx('thumb')}>
                        <img src={images.longbauduc} alt="Oval Cage" className={cx('thumb-img')}></img>
                        <div className={cx('text')}>
                            <h3 className={cx('title')}>Oval Cage</h3>
                            <Link to={'/products'} className={cx('watchnow')}>
                                Watch now
                            </Link>
                        </div>
                    </div>
                    <div className={cx('thumb')}>
                        <img src={images.longhinhvuong} alt="square cage" className={cx('thumb-img')}></img>
                        <div className={cx('text')}>
                            <h3 className={cx('title')}>Square Cage</h3>
                            <Link to={'/products'} className={cx('watchnow')}>
                                Watch now
                            </Link>
                        </div>
                    </div>
                    <div className={cx('thumb')}>
                        <img src={images.longdagiac} alt="Polygonal Cage" className={cx('thumb-img')}></img>
                        <div className={cx('text')}>
                            <h3 className={cx('title')}>Polygonal Cage</h3>
                            <Link to={'/products'} className={cx('watchnow')}>
                                Watch now
                            </Link>
                        </div>
                    </div>
                    <div className={cx('thumb')}>
                        <img src={images.longkhac} alt="Cages of Other Shapes" className={cx('thumb-img')}></img>
                        <div className={cx('text')}>
                            <h3 className={cx('title')}>Cages of Other Shapes</h3>
                            <Link to={'/products'} className={cx('watchnow')}>
                                Watch now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('text')}>
                    <h2 className={cx('title')}>All Products</h2>
                    <img src={images.hoa}></img>
                </div>
                <div className={cx('filter')}>
                    <FontAwesomeIcon icon={faArrowUpAZ} className={cx('icon')}></FontAwesomeIcon>
                    <span className={cx('sortby')}> Sort by :</span>
                    <div className={cx('btn')}>Name A-Z</div>
                    <div className={cx('btn')}>Name Z-A</div>
                    <div className={cx('btn')}>Low to High Price</div>
                    <div className={cx('btn')}>High to Low Price</div>
                    <div className={cx('btn')}>Wooden Bird Cage</div>
                    <div className={cx('btn')}>Metal Bird Cage</div>
                </div>
                {/* list poducts */}
                <ListProducts />
                <div className={cx('pagination')}>
                    <div className={cx('num-btn', 'action')}>1</div>
                    <div className={cx('num-btn')}>2</div>
                    <div className={cx('num-btn')}>&gt;&gt;</div>
                </div>
            </div>
        </div>
    );
}

export default Products;
